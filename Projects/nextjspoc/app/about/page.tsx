import Link from "next/link"
import style from "./page.module.css"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function About() {
    return(
        <main className={style.main}>
        <Link href="/">Link to home page</Link>
        <h1>About</h1>
        </main>
    )
}