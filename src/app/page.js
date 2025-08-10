"use client";

import Loading from "./Loading.js";
import Link from "next/link";
import Prompt from "./Prompt.js";
import styles from "./page.module.css";
import Image from "next/image";
import headshot from "../../public/me.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasBootPlayed = sessionStorage.getItem("bootPlayed");
      if (!hasBootPlayed) {
        sessionStorage.setItem("bootPlayed", "true");
        setLoading(true); // Update state to show animation
      } else {
        setLoading(false); // Skip animation
      }
    }
  }, []);

  if (loading) {
    return (
      <Loading
        onComplete={() => {
          setLoading(false);
          sessionStorage.setItem("bootPlayed", "true");
        }}
      />
    );
  }
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-evenly w-full">
        <Image
          className="w-96 max-md:w-40"
          src={headshot}
          alt="A portrait of me"
        />
        <h1 className="leading-tight text-7xl max-md:text-2xl font-bold">
          I&apos;m
          <br />
          <strong className="text-primary">
            Mariano
            <br />
            Rodriguez
          </strong>
        </h1>
      </div>
      <div className="w-full text-4xl mt-12 max-md:text-xl max-md:p-4">
        <Prompt cmd="cat tagline.txt" />
        <p className="mt-4">
          I love building things and I love building them <strong>right</strong>
          .
        </p>
      </div>
      <div className="w-full text-4xl mt-6 max-md:text-xl max-md:p-4">
        <Prompt cmd="ls" />
        <div className="grid grid-cols-4 max-lg:grid-cols-2 mt-4 text-primary">
          <Link
            className="hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
            href="/about"
          >
            About/
          </Link>
          <Link
            className="hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
            href="/blog"
          >
            Blog/
          </Link>
          <Link
            className="hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
            href="/contact"
          >
            Contact/
          </Link>
          <a
            className="hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
            href="https://github.com/mariano-f-r"
          >
            GitHub/
          </a>
          <a
            className="hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
            href="https://www.linkedin.com/in/marianofr/"
          >
            LinkedIn/
          </a>
          <Link
            className="hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
            href="/projects"
          >
            Projects/
          </Link>
          <a
            href="/resume.pdf"
            alt="my resume"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:brightness-125 hover:scale-105 underline transition-all duration-150 ease-in delay-75 mr-auto"
          >
            resume.pdf
          </a>
          <p>tagline.txt</p>
        </div>
      </div>
    </>
  );
}
