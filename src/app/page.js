'use client'

import Loading from "./Loading.js";
import Link from 'next/link'
import Prompt from "./Prompt.js"
import styles from "./page.module.css";
import Image from "next/image"
import headshot from "../../public/me.jpg"
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasBootPlayed = sessionStorage.getItem('bootPlayed');
      if (!hasBootPlayed) {
        sessionStorage.setItem('bootPlayed', 'true');
        setLoading(true); // Update state to show animation
      } else {
        setLoading(false); // Skip animation
      }
    }
  }, []);

  if (loading) {
    return <Loading onComplete={() => {
      setLoading(false);
      sessionStorage.setItem('bootPlayed', 'true');
    }}/>
  }
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col h-screen w-1/2 max-sm:w-screen">
        <div className="flex flex-row flex-wrap items-center justify-around w-full mt-16">
          <Image className="w-96 max-sm:w-40" src={headshot} alt="A portrait of me"/>
          <h1 className="leading-tight text-7xl max-sm:text-2xl font-bold">I&apos;m<br/><strong className="text-accent">Mariano<br/>Rodriguez</strong></h1>
        </div>
        <div className="w-full text-4xl mt-12 max-sm:text-xl max-sm:p-4">
          <Prompt cmd="cat tagline.txt"/>
          <p className="mt-4">
            I love building things and I love building them <strong>right</strong>. 
          </p>
        </div>
        <div className="w-full text-4xl mt-6 max-sm:text-xl max-sm:p-4">
          <Prompt cmd="ls"/>
          <div className="grid grid-cols-4 max-md:grid-cols-2 mt-4 text-primary">
            <Link className="underline hover:no-underline" href="/about">About/</Link>
            <Link className="underline hover:no-underline" href="/blog">Blog/</Link>
            <Link className="underline hover:no-underline" href="/contact">Contact/</Link>
            <a className="underline hover:no-underline" href="https://github.com/mariano-f-r">GitHub/</a>
            <a className="underline hover:no-underline" href="https://www.linkedin.com/in/marianofr/">LinkedIn/</a>
            <Link className="text-accent font-semibold hover:brightness-200 underline hover:no-underline" href="/projects">Projects/</Link>
            <a href="/resume.pdf" alt="my resume" target="_blank" rel="noopener noreferrer">resume.pdf</a>
            <p>tagline.txt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
