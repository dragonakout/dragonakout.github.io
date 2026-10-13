import React from 'react'
import { Link } from 'react-router-dom'

// Very small Markdown support for text inside a paragraph or caption:
//   ***bold and italic***    **bold** or __bold__    *italic* or _italic_
//   [display name](https://example.com)      -> a link
//   [another post](/blog/some-slug)           -> a link to a page of this site
// Formatting can be nested: **bold with *italic* inside**, or
// **[a bold link](https://example.com)**
//
// A marker without a matching partner (e.g. "5 * 3") is shown as-is, and
// underscores inside words (like file_name) are left alone.

const FORMAT = new RegExp([
  // [display name](address) - the address may contain one level of ( ),
  // as in Wikipedia links like .../Bodø_(town)
  /\[([^\]]+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/.source,
  // Tries the longest marker first so "***" isn't mistaken for "**" + "*".
  /\*\*\*(.+?)\*\*\*/.source,
  /\*\*(.+?)\*\*/.source,
  /__(.+?)__/.source,
  /\*(?!\s)(.+?)\*/.source,
  /(?<!\w)_(?!\s)(.+?)_(?!\w)/.source,
].join('|'))

// Only these kinds of addresses become links (anything else, like
// "javascript:...", is shown as plain text).
const SAFE_ADDRESS = /^(https?:\/\/|mailto:|\/|#)/

function makeLink(name, address) {
  const content = format(name)

  // Addresses starting with "/" are pages of this site: use the router's
  // <Link> so the page changes without reloading.
  if (address.startsWith('/')) {
    return <Link className='postLink' to={address}>{content}</Link>
  }
  // Everything else opens in a new tab, like the rest of the site's links.
  // rel="noopener noreferrer" stops the other site from controlling this tab.
  return (
    <a className='postLink' href={address} target='_blank' rel='noopener noreferrer'>
      {content}
    </a>
  )
}

// Returns a list of plain strings and <strong>/<em>/<a> elements.
// It calls itself on the text inside a marker ("recursion") so that
// formatting inside formatting also works.
function format(text) {
  const parts = []
  let rest = text

  while (rest) {
    const match = rest.match(FORMAT)
    if (!match) {
      parts.push(rest)
      break
    }
    if (match.index > 0) parts.push(rest.slice(0, match.index))

    const [whole, linkName, linkAddress, boldItalic, boldStars, boldUnderscores, italicStar, italicUnderscore] = match
    const bold = boldStars ?? boldUnderscores
    const italic = italicStar ?? italicUnderscore

    if (linkName !== undefined) {
      parts.push(SAFE_ADDRESS.test(linkAddress) ? makeLink(linkName, linkAddress) : whole)
    } else if (boldItalic !== undefined) {
      parts.push(<strong><em>{format(boldItalic)}</em></strong>)
    } else if (bold !== undefined) {
      parts.push(<strong>{format(bold)}</strong>)
    } else {
      parts.push(<em>{format(italic)}</em>)
    }
    rest = rest.slice(match.index + whole.length)
  }

  // React needs a `key` on each element of a list (see PostBody.jsx).
  return parts.map((part, index) =>
    typeof part === 'string' ? part : React.cloneElement(part, { key: index })
  )
}

// Usage: <InlineText text="Some **bold** words and a [link](https://...)" />
export default function InlineText({ text }) {
  return <>{format(text)}</>
}
