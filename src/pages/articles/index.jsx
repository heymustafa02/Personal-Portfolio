import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
// import { getAllspeakings } from '@/lib/getAllspeakings' // Comment this out if you don't need it

import { formatDate } from '@/lib/formatDate'

function Speaking({ speaking }) {
  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/speakings/${speaking.slug}`}>
          {speaking.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={speaking.date}
          className="md:hidden"
          decorate
        >
          {formatDate(speaking.date)}
        </Card.Eyebrow>
        <Card.Description>{speaking.description}</Card.Description>
        <Card.Cta>Read speaking</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={speaking.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(speaking.date)}
      </Card.Eyebrow>
    </div>
  )
}

export default function SpeakingsIndex({ speakings }) {
  return (
    <>
      <Head>
        <title>My blogs</title>
        <meta
          name="description"
          content="A collection of writings and life lessons"
        />
      </Head>
      <SimpleLayout
        title="Writing on my life lessons and some cool stuff"
        intro="Will be documenting everything here pretty soon. Till then stay tuned :)"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {speakings.map((speaking) => (
              <Speaking key={speaking.slug} speaking={speaking} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      // Replace getAllspeakings with mock data temporarily
      speakings: [
        {
          slug: 'life-lessons',
          title: 'Life Lessons',
          date: '2024-11-01',
          description: 'A collection of life lessons I learned.',
        },
        {
          slug: 'coding-journey',
          title: 'My Coding Journey',
          date: '2024-10-15',
          description: 'Documenting my coding journey from beginner to expert.',
        },
      ],
    },
  }
}
