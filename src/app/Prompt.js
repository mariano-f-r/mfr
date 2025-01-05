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
				className="hover:underline"
				key={i}
				href={pathSections.slice(0, i + 1).join("/")}
			>
				{item}
			</Link>
			/
		</>
	));

	return (
		<div className={`font-mono`}>
			<span className="max-sm:hidden ">mariano@portfolio: </span>
			<span className="text-secondary">
				<Link className="hover:underline" href="/">
					home
				</Link>
				{...breadcrumbs}
			</span>
			<span>$ {cmd}</span>
		</div>
	);
}
