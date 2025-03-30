import React from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Connect with me" />
      </Head>
      <ContactForm />
    </>
  );
}
