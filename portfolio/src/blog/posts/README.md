# ✍️ Blog posts

Each folder in here is one blog post. The folder holds the text (`post.js`)
and every picture used in that post:

```
posts/
  solo-sailing-arctic-norway-part-1/
    post.js
    Kjerringøy.jpg
    Skrova fyr.jpg
  _template/          <- folders starting with "_" are ignored
    post.js
```

## Adding a post

1. Copy the `_template` folder and rename the copy. **The folder name is the
   post's URL**: `my-story` -> `/blog/my-story`. Use lowercase letters,
   numbers and dashes only.
2. Fill in `post.js` and drop your pictures next to it.
3. `npm start` to preview, `npm run deploy` to publish.

There is no list to update: the site finds every folder on its own.
Posts are sorted by date, newest first.

## The fields in `post.js`

| Field     | What it is                                         |
|-----------|----------------------------------------------------|
| `title`   | Shown on the card and at the top of the post.      |
| `date`    | `'YYYY-MM-DD'`. Newest posts appear first.         |
| `summary` | One or two sentences shown on the post cards.      |
| `body`    | The story itself, between the backticks ( \` ).    |

## Writing the body

- Leave an **empty line** between paragraphs. A single line break is kept as a line break.
- `**bold**` (or `__bold__`), `*italic*` (or `_italic_`), `***bold italic***`
- Links: `[display name](https://example.com)`.
  Links to your own pages start with `/`: `[part 2](/blog/its-folder-name)`
- Pictures go on their own line, with an empty line before and after:

  ```
  [image: Skrova fyr.jpg]
  [image: Skrova fyr.jpg | An optional caption, *formatting* and [links](https://...) work]
  ```

  The name must match a file in the post's folder (upper/lower case matters).
  A full `https://...` address also works.
- If the text contains a backtick ( \` ), write it as `` \` ``.
