import fs from "fs";
import matter from "gray-matter";
import path from "path";

// creating an absolute path
const postsDir = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDir);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8"); // Correct

  // returns metadata as data as JS object and content is md string
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // reads all documents in a blocking way
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((posts) => posts.isFeatured);

  return featuredPosts;
}
