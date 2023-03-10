import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/userComponents/PreviewSuspense";
import BlogList from "../../components/userComponents/BlogList";
import PreviewBlogList from "../../components/userComponents/PreviewBlogList";

const query = groq`
*[_type=="post"]{
  ...,
  author->,
  categories[]->
} | order(_creatdeAt desc)

`;

const page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="flex text-center text-lg animate-pulse text-[#f7AB0A] ">
              loading preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default page;
