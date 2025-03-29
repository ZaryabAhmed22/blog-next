import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //   const imagePath = `/images/posts/${slug}/${image}`;
  const imagePath = `/images/posts/getting-started-with-nextjs/getting-started-nextjs.png`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`} legacyBehavior>
        <a>
          {/* Image container */}
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>

          {/* Content container */}
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
