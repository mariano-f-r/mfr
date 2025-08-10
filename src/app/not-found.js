"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const path = usePathname();
  const command = `cd ${path}`;
  return (
    <div className="text-4xl h-full">
      <div className={`font-mono`}>
        <span className="max-sm:hidden ">mariano@portfolio: </span>
        <span className="text-secondary">
          <Link className="hover:underline" href="/">
            home
          </Link>
        </span>
        <span>$ {command}</span>
      </div>
      <p className="mt-4">Error 404: {path} no such file or directory</p>
    </div>
  );
}
