import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "..";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
