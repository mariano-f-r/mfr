"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Prompt({ cmd }) {
  let path = usePathname();

  if (path == "/") {
    path = "";
  }

  let pathSections = path.split("/");
  let breadcrumbs = Array.from(pathSections.entries()).map(([i, item]) => (
    <>
      <Link
        className="hover:brightness-125 hover:scale-105 transition-all duration-150 ease-in delay-75"
        key={i}
        href={pathSections.slice(0, i + 1).join("/")}
      >
        {item}
      </Link>
      /
    </>
  ));

  return (
    <div className="font-mono my-2">
      <span className="max-sm:hidden ">mfr@portfolio: </span>
      <span className="text-secondary">
        <Link
          className="hover:brightness-125 hover:scale-105 transition-all duration-150 ease-in delay-75"
          href="/"
        >
          home
        </Link>
        {...breadcrumbs}
      </span>
      <span>$ {cmd}</span>
    </div>
  );
}
