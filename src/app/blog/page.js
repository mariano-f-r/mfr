import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Prompt from "../Prompt.js";
import PostThumbnail from "./PostThumbnail.js";

export async function getPostData() {
	const dir = path.join(process.cwd(), "src/content");
	const files = fs.readdirSync(dir);

	const posts = files.map((file) => {
		const slug = file.replace(/\.mdx$/, "");
		const filePath = path.join(dir, file);

		const fileContent = fs.readFileSync(filePath, "utf8");
		const { data } = matter(fileContent); // Extract front matter

		return {
			slug,
			title: data.title || slug, // Use front matter title or fallback to slug
			desc: data.desc || "",
			author: data.author || "Anonymous",
			date: data.date || new Date(), // Use front matter date or fallback
			image: data.image,
			tags: data.tags || "",
		};
	});

	return posts;
}

export default async function Blog() {
	let allPosts = await getPostData();

	return (
		<div className="flex flex-row justify-center">
			<div className="flex flex-col h-screen w-1/2 max-sm:w-screen max-md:mx-4">
				<div className="mt-8 text-3xl">
					<Prompt cmd="ls" />
				</div>
				<div>
					<ul>
						{allPosts
							.map((post) => (
								<li key={post.date}>
									<PostThumbnail metadata={post} />
								</li>
							))
							.toSorted((a, b) => {
								// console.log(a, b);
								const pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
								let real_date_a = new Date(
									String(a.key).replace(pattern, "$3-$2-$1"),
								);
								let real_date_b = new Date(
									String(b.key).replace(pattern, "$3-$2-$1"),
								);

								// console.log(real_date_a);
								// console.log(real_date_b);

								return real_date_b - real_date_a;
							})}
					</ul>
				</div>
			</div>
		</div>
	);
}
