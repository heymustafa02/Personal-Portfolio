import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import iconimg from '@/images/icon-image.jpg'
import { Container } from '@/components/Container'
import {
  XIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Hey! I&apos;m Mustafa</title>
        <meta
          name="description"
          content="&quot;I&apos;m Mustafa Mallebhari. A full stack developer &amp; a web3 enthusiast.&quot;"
          
        />
        <meta property="og:url" content="https://mustafa-mallebhari.vercel.app"/>
        <link rel="icon" href={iconimg.src} type="image/jpg" />

      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Portrait of Mustafa"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Mustafa Mallebhari.<br /> A full stack developer based in India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a 19 year old full stack developer from India. I started programming a year ago. Throughout my journey I&apos;ve learned numerous programming languages, starting from HTML, CSS
                to ReactJS, MongoDB to NextJS &amp; Tailwind CSS. 
                While I&apos;ve also delved into the Web3 space, exploring decentralization and beyond!
              </p>
              <p>
                I&apos;m not here to just code; I&apos;m here to create experiences people genuinely enjoy. My goal? To bring fresh,
                exciting ideas to life in ways that make people think, &quot;Wow, that&apos;s cool.&quot; So, whether it&apos;s a sleek app interface,
                a next-level backend, or a bold new Web3 experiment, 
                I&apos;m always chasing that next innovative project!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://x.com/mallebhari_"
                target="_blank"
                icon={XIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/mustafa.mallebhari"
                target="_blank"
                
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/mustafamallebhari/"
                target="_blank"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/heymustafa02"
                target="_blank"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:heymustafa.work@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                heymustafa.work@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
