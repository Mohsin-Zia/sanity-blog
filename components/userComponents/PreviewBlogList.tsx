"use client";
import { usePreview } from "../../lib/sanity.preview";
import BlogList from "./BlogList";

type props = {
  query: string;
};

const PreviewBlogList = ({ query }: props) => {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
