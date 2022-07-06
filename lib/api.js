import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import mdx from "@mdx-js/mdx";
import path from "path";

export function getNoteBySlug(slug) {
  const path = process.cwd() + "/index.json";
  const filess = fs.readFileSync(path, "utf8");
  const object = JSON.parse(filess);
  const realSlug = slug.replace(/\.md$/, "");
  for (let i = 0; i < object.length; i++) {
    if (object[i]["slug"] == realSlug) {
      return object[i];
    }
  }
  return [];
}

export function getAllNotes() {
  const path = process.cwd() + "/index.json";
  const filecontent = fs.readFileSync(path, "utf8");
  const object = JSON.parse(filecontent);
  return object;
}
