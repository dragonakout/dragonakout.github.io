import posts from './posts'

// All posts, newest first. ([...posts] makes a copy so we never reorder
// the original list.)
export function getAllPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

// The post whose slug matches, or undefined if there is none.
export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

// "2026-10-12" -> "October 12, 2026"
// (Built from parts on purpose: new Date("2026-10-12") is read as UTC midnight,
// which shows as the previous day in Canadian time zones.)
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Caption without Markdown symbols, used as the image's alt text
// (what screen readers say, and what shows if the picture fails to load).
function plainText(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_]{1,3}(\S[^*_]*?)[*_]{1,3}/g, '$1')
}

const IMAGE_LINE = /^\[image:\s*([^|\]]+?)\s*(?:\|\s*(.*?)\s*)?\]$/

// Turns a post's body text into a list of blocks:
//   { type: 'paragraph', text: '...' }
//   { type: 'image', src: '/blog-images/x.jpg', caption: '...' }
export function parseBody(body) {
  return body
    .split(/\n\s*\n/)            // an empty line separates blocks
    .map((block) => block.trim())
    .filter((block) => block !== '')
    .map((block) => {
      const match = block.match(IMAGE_LINE)
      if (match) {
        const file = match[1]
        const src = /^https?:\/\//.test(file)
          ? file
          : `${process.env.PUBLIC_URL}/blog-images/${file}`
        const caption = match[2] || ''
        return { type: 'image', src, caption, alt: plainText(caption) }
      }
      return { type: 'paragraph', text: block }
    })
}
