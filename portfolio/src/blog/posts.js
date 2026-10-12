/*
 * ✍️  YOUR BLOG POSTS LIVE HERE
 *
 * To publish a new story, copy one { ... } block below, fill it in, and
 * run `npm run deploy`. Order doesn't matter: posts are sorted by date.
 *
 *   slug     The end of the post's URL: "my-story" -> /blog/my-story
 *            Use lowercase letters, numbers and dashes only. Must be unique.
 *   title    Shown on the card and at the top of the post.
 *   date     "YYYY-MM-DD". Newest posts appear first.
 *   summary  One or two sentences shown on the post cards.
 *   body     The story itself, between the backticks ( ` ).
 *              - Leave an empty line between paragraphs.
 *              - To insert a picture, put it on its own line, with an empty
 *                line before and after:
 *                    [image: my-photo.jpg]
 *                    [image: my-photo.jpg | An optional caption]
 *                The file must be in the folder  public/blog-images/
 *                (a full https://... address also works).
 *              - If your text contains a backtick ( ` ), write it as \`
 */

const posts = [
  {
    slug: 'example-post',
    title: 'Example post (replace me!)',
    date: '2026-10-12',
    summary: 'A sample post showing how paragraphs and pictures work. Delete it once you have a real story.',
    body: `
This is the first paragraph. Write as much as you want here; the text wraps on its own, so you don't need to worry about line length.

Here is a second paragraph. An empty line above it is all it takes to start a new one.

[image: example.png | A picture in the middle of the text, with a caption.]

And the story continues after the picture. The image above is public/blog-images/example.png, a copy of the photo from the About section.
`,
  },
]

export default posts
