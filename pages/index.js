import React from "react";
import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedPosts />
    </div>
  );
}

// 1) Hero => Present our selves
// 2) Featured posts
