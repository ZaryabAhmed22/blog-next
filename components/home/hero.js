import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/zaryab.jpg"
          alt="An image showing Zaryab"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Zaryab</h1>
      <p>
        I blog about web development - especially frontend framesworks like Next
        or React
      </p>
    </section>
  );
}
