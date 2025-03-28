import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting started with Next JS",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
};
export default function PostContent() {
  const { title, slug, image, content } = DUMMY_POST;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      {content}
    </article>
  );
}
