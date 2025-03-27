import React from "react";
import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting started with Next JS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Js framework build to create full-stack React Application on the Server",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next JS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Js framework build to create full-stack React Application on the Server",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next JS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Js framework build to create full-stack React Application on the Server",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next JS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Js framework build to create full-stack React Application on the Server",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
];
export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}

// 1) Hero => Present our selves
// 2) Featured posts
