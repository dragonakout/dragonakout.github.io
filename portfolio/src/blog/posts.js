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
 *              - **bold** (or __bold__), *italic* (or _italic_) and
 *                ***bold italic*** work in paragraphs and captions.
 *              - Links: [display name](https://example.com)
 *                Links to your own pages start with "/": [my other post](/blog/its-slug)
 *              - A single line break is kept as a line break.
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
    slug: 'solo-sailing-arctic-norway-part-1',
    title: 'On board: Solo sailing in Arctic Norway - Part 1',
    date: '2026-05-07',
    summary: 'A transcription of the first email telling the events of my trip sailing solo in the Lofoten Islands.',
    body: `

_The following post is the translation of an email sent to friends and family following my trip in Norway._

Hello everyone! Just sending some news from Norway!

A couple things have happened in the last few days, so here's a small recap:

First up, I picked up the boat in a town called Løpsmarka, nearby Bodø last Saturday, May 2nd. A Maxi 84, 28 feet, with a autopilot, cooking rings, fridge and a Volvo Penta engine starting instantly.

I took one day and a half getting to know the boat (as well as waiting for a good weather window, i.e. less than 20kt of wind, ideally SW.), and then, I set sail!

[image: First navigation in Norway.jpg | After almost 9 months of planning (5000km away), studying the maps, the weather patterns, collecting advice from experienced sailors, we're finally setting sail in the arctic!]

First, I reached Kjerringøy. Sailing under the cold rain of the arctic circle, just following a small snowfall. It set the tone right then.

At Kjerringøy, I crossed another sailboat, a swedish couple, Instagram influencers, [Sailing Ingrid Marie](https://www.instagram.com/sailing_ingridmarie/). (I appear on one of their [video](https://www.instagram.com/reel/DYAFEJWPKVF/) as well!) 

[image: Kjerringøy.jpg | Misty Steigen peeks seen from Kjerringøy. This was taken at around 6:00PM, the sun setting briefly at around 11:00PM.]

Then, I did the trip from Kjerringøy to Nordskot, crossing a maze of rocky islets which felt a bit too close. It was a beautiful day, 12kt SW, with sunny blue sky (a rare event among these parts!).

It was then time to cross the Vestfjord. The weather was calm, so it was mostly an engine sail, at least at first. Eventually, the wind picked up and the expected SW swell finally appeared. I did arrive in the end at my destination, on the other side of the Vestfjord, through a tight channel between the rocky inlets, with Skrova lighthouse dominating on the port side.


[image: Skrova fyr.jpg | Arriving to Skrova. The swell was breaking off on the rocks of the lighthouse islet.]

I am now currently on Skrova, an island off the Lofoten archipelago. I made the hike around the island today, filling up on panoramic pictures. I'll be heading toward Henningsvær tomorrow, a small village built upon rocky islets, with multiple curvy bridges between them.

[image: Skrova view.jpg | Skrova has been my favorite spot for now. Taking a step back and seeing my small boat in the home of giants...Wow.]

The plan for now is to go slowly southwest towards _Reine_, at the edge of Lofoten, and from there, await a good weather window to cross the Vestford to bring the boat back to Løpsmarka.


[image: Five degrees on board.jpg | I definitely underestimated how hard it would be to get out of the sleeping bag in the mornings...]

Some stats:
Average temperature in the boat:  5°C (0°C felt outside)
Distance covered: ~50 NM
Autopilot: Sometimes decides to go on in circles and go on strike. So we steer by hand, or with a knot...

Until next time, fair winds!

Maïgan

[image: Towards Nordskot.jpg | As far away as the wind may blow, we'll be kings wherever we may go. (Santiano)]

`,
  },
]

export default posts
