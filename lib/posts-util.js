import fs from "fs";
import matter from "gray-matter";
import path from "path";

// creating an absolute path
const postsDir = path.join(process.cwd(), "posts");

function getPostData(file) {
  const filePath = path.join(postsDir, file);
  const fileContent = fr.readdirSync(filePath);

  // returns metadata as data as JS object and content is md string
  const { data, content } = matter(fileContent);

  const postSlug = file.replace(/\.md$/, ""); // removes the file extension

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
