import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import mdx from "@mdx-js/mdx";
import path from "path";

const notesDirectory = join(process.cwd());

function scanDir(dirPath, extension) {
	const mdxFiles = [];
	const scan = (dirPath) => {
		const filenames = fs.readdirSync(dirPath);
		filenames.sort();
		filenames.map((filename) => {
			const filePath = path.join(dirPath, filename);
			const st = fs.statSync(filePath);
			if (st.isFile() && filePath.endsWith(extension)) {
				mdxFiles.push(filePath);
			}
			if (st.isDirectory()) {
				scan(filePath);
			}
		});
	};
	scan(dirPath);
	return mdxFiles;
}

export function getNotesSlug() {
	return fs.readdirSync(notesDirectory);
}

export function getNotesBySlug(slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = `${notesDirectory}/${realSlug}.md`;
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const stats = fs.statSync(fullPath);
	// const realSlug = slug.replace(/\.md$/, "");
	// const fullPath = join(postsDirectory, `${realSlug}.md`);
	// const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);
	const items = {};
	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === "slug") {
			items[field] = realSlug;
		}
		if (field === "content") {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});
	const title = realSlug.split("/").slice(-1).filter(Boolean).join("-")
	items["stats"] = JSON.stringify(stats);
	items["title"] = title;
	return items;
}

export function getAllNotes(fields = ["slug", "title", "stats", "content"]) {
	const slugs = getNotesSlug();
	const test = scanDir("notes", ".md");
	const test1 = test[0].replace(/\.md$/, "");
	const posts = test
		.map((slug) => getNotesBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
	return posts;
}
