// import ReactDOMServer from 'react-dom/server'
// import { Feed } from 'feed'
// import { mkdir, writeFile } from 'fs/promises'

// // import { getAllspeakings } from './getAllspeakings'

// export async function generateRssFeed() {
//   // let speakings = await getAllspeakings()
//   let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
//   let author = {
//     name: 'Mustafa Mallebhari',
//     email: 'heymustafa.work@gmail.com',
//   }

//   let feed = new Feed({
//     title: author.name,
//     description: 'Your blog description',
//     author,
//     id: siteUrl,
//     link: siteUrl,
//     image: `${siteUrl}/profile.png`,
//     favicon: `${siteUrl}/profile.png`,
//     copyright: `All rights reserved ${new Date().getFullYear()}`,
//     feedLinks: {
//       rss2: `${siteUrl}/rss/feed.xml`,
//       json: `${siteUrl}/rss/feed.json`,
//     },
//   })

//   // for (let speaking of speakings) {
//   //   let url = `${siteUrl}/speakings/${speaking.slug}`
//   //   let html = ReactDOMServer.renderToStaticMarkup(
//   //     <speaking.component isRssFeed />
//   //   )

//   //   feed.addItem({
//   //     title: speaking.title,
//   //     id: url,
//   //     link: url,
//   //     description: speaking.description,
//   //     content: html,
//   //     author: [author],
//   //     contributor: [author],
//   //     date: new Date(speaking.date),
//   //   })
//   // }

//   await mkdir('./public/rss', { recursive: true })
//   await Promise.all([
//     writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
//     writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
//   ])
// }
