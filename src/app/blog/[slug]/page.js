import Prompt from "../../Prompt.js";
import Image from "next/image";
import Head from "next/head";
import matter from "gray-matter";
import { CustomMDX } from "./remoteMDX.js";
import fs from "fs";
import path from "path";

// Generate static params for each blog post
export async function generateStaticParams() {
	const dir = path.join(process.cwd(), "src/content");
	const files = fs.readdirSync(dir);
	return files.map((file) => {
		const slug = file.replace(/\.mdx$/, "");
		return {
			slug,
		};
	});
}

export async function parseMdx(slug) {
	const filePath = path.join(process.cwd(), "src/content", `${slug}.mdx`);
	const fileContents = fs.readFileSync(filePath, "utf8");
	return matter(fileContents); // Extract frontmatter and content
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const { data } = await parseMdx(slug);

	return {
		title: data.title,
		description: data.desc,
		openGraph: {
			title: data.title,
			description: data.description,
			images: [`https://mariano-f-r.github.io/${data.image}`],
			url: `https://mariano-f-r.github.io/blog/${slug}`,
		},
	};
}

export default async function Page({ params }) {
	const { slug } = await params;

	let parsedData = await parseMdx(slug);

	// Attempt to dynamically import the MDX file

	// const { content } = matter(Post)
	const readable = slug.replace(/-/g, "-"); // Make slug human-readable

	return (
		<div className="flex flex-row justify-center">
			<div className="flex flex-col h-screen w-1/2 max-sm:w-screen max-sm:mx-4">
				<div className="mt-8 text-4xl">
					<Prompt cmd={`cat ${readable}.md`} />
				</div>
				<div className="mt-4">
					<h1 className="text-6xl font-bold">{parsedData.data.title}</h1>
					<p className="mt-2 text-xl text-white text-opacity-50">
						{parsedData.data.desc}
					</p>
					<div className="flex mt-2">
						<h2 className="text-base">By {parsedData.data.author}</h2>
						<h2 className="text-base self-end ml-auto">
							Dated {parsedData.data.date}
						</h2>
					</div>
					<hr />
					<div className=" mt-2 relative w-full aspect-[16/9] overflow-hidden">
						<Image
							className="absolute inset-0 w-full h-full object-cover"
							alt="Blog image"
							width={16 * 60}
							height={9 * 60}
							src={parsedData.data.image}
						/>
					</div>
					<article className="mt-4 mb-8">
						<CustomMDX source={parsedData.content} />
					</article>
				</div>
			</div>
		</div>
	);
}

export const dynamicParams = false;
