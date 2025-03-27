import Link from "next/link";
import React from "react";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        {/* adding <a> tag in case of image, since Link will not provide <a> tag for images */}
        {/* <a> */}
        <Logo />
        {/* </a> */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
