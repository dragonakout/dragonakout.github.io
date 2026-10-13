// Finds every post in the posts/ folder, and the pictures next to them.
//
// require.context(...) is a feature of webpack, the tool that builds the
// site (`npm start` / `npm run build`). It finds all files in a folder that
// match a pattern, so adding a folder is enough to add a post. Folders whose
// name starts with "_" (like _template) are skipped.
//
// It only exists inside webpack, so in tests (`npm test`) the calls fail and
// there are simply no posts. (Webpack must see require.context(...) written
// exactly like this, as a direct call, to recognize it.)
let postFiles = null
let imageFiles = null
try {
  postFiles = require.context('./posts', true, /^\.\/[^_/][^/]*\/post\.js$/)
  imageFiles = require.context('./posts', true, /^\.\/[^_/][^/]*\/[^/]+\.(png|jpe?g|gif|webp|avif|svg)$/i)
} catch (error) {
  // Not running inside webpack.
}

// Mac file names and typed text can store accented letters (é, ü...) in two
// different ways that look identical; normalize('NFC') makes them match.
const normalize = (path) => path.normalize('NFC')

// { "./my-post/photo.jpg": "/static/media/photo.1a2b3c.jpg", ... }
const imageUrls = {}
if (imageFiles) {
  for (const key of imageFiles.keys()) {
    imageUrls[normalize(key)] = imageFiles(key)
  }
}

// [{ slug: "my-post", title: ..., date: ..., summary: ..., body: ... }, ...]
// The slug (the URL part) is the folder's name.
const posts = postFiles
  ? postFiles.keys().map((key) => ({
      ...postFiles(key).default,
      slug: key.split('/')[1],
    }))
  : []

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

// Where the picture `file` of post `slug` ends up on the site, or
// undefined if there is no such file in the post's folder.
function imageUrl(slug, file) {
  if (/^https?:\/\//.test(file)) return file
  return imageUrls[normalize(`./${slug}/${file}`)]
}

// Turns a post's body text into a list of blocks:
//   { type: 'paragraph', text: '...' }
//   { type: 'image', src: '/static/media/x.jpg', caption: '...', alt: '...' }
//   { type: 'missingImage', file: 'x.jpg' }   (file not found in the folder)
export function parseBody(body, slug) {
  return body
    .split(/\n\s*\n/)            // an empty line separates blocks
    .map((block) => block.trim())
    .filter((block) => block !== '')
    .map((block) => {
      const match = block.match(IMAGE_LINE)
      if (match) {
        const file = match[1]
        const src = imageUrl(slug, file)
        if (!src) return { type: 'missingImage', file }
        const caption = match[2] || ''
        return { type: 'image', src, caption, alt: plainText(caption) }
      }
      return { type: 'paragraph', text: block }
    })
}
