import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home({Blogs}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog creatd by Pankaj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero blogs={Blogs}/>
    </>
  )
}
export async function getServerSideProps(context) {
  let blog = await fetch("http://localhost:3000/api/getblogs")
  let Allblogs = await blog.json();
  return {
    props: {Blogs:Allblogs}, // will be passed to the page component as props
  }
}
