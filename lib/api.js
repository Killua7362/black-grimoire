import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
const mdx = require("@mdx-js/mdx");
const path = require("path");

const postsDirectory = join(process.cwd());

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

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = `${postsDirectory}/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");

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

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const test = scanDir("notes", ".md");
  const test1 = test[0].replace(/\.md$/, "");
  const posts = test
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}
