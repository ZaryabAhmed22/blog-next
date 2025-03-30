import React from "react";
import PostDetail from "../../components/posts/post-detail";
import { getPostData, getPostFiles } from "../../lib/posts-util";
import Head from "next/head";

export default function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostDetail post={props.post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// since this is a dynamic path file, getStaticProps will not work on its own without getStaticPaths
export function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  // this enusre that data is prepared on demand when we visit this page
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })), //preparing paths in advance
    // paths: [],
    fallback: false,
    // fallback: true,
    //fallback: "blocking", // this ensures that data should be prepared first
  };
}
