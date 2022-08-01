import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import path from "path";

const NotesDirectory = join(process.cwd());
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

function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = `${NotesDirectory}/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  var stats = fs.statSync(fullPath);
  items["stats"] = stats;
  items["slug"] = realSlug;
  items["content"] = content;
  items["frontmatter"] = data;

  return items;
}
const slugs = scanDir("notes", ".md");

const posts = slugs
  .map((slug) => getPostBySlug(slug))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));

const indexpath = process.cwd() + "/index.json";
fs.writeFileSync(indexpath, JSON.stringify(posts), "utf8");
