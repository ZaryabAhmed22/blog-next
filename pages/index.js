import React from "react";
import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

// export const DUMMY_POSTS = [
//   {
//     title: "Getting started with Next JS",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "Next Js is a React Js framework build to create full-stack React Application on the Server",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting started with Next JS",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "Next Js is a React Js framework build to create full-stack React Application on the Server",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting started with Next JS",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "Next Js is a React Js framework build to create full-stack React Application on the Server",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting started with Next JS",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "Next Js is a React Js framework build to create full-stack React Application on the Server",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
// ];
export default function HomePage(props) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
}

// outside development it will be excuted only once in production
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //revalidate: 1800, // regenrate latest data
  };
}

// 1) Hero => Present our selves
// 2) Featured posts
