"use client";
import * as React from "react";
import Layout from "@/components/Layout";

export const mainFeaturedPost = {
  title: 'Законопроект о правах женщин',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

export default function Home() {
  return (
    <main>
      <Layout>
        <div>hello</div>
      </Layout>
    </main>
  )
}
