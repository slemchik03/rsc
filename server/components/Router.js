import BlogLayout from "./Layout";
import BlogIndexPage from "./Main";
import { BlogPostPage } from "./Post";
import sanitizeFilename from "sanitize-filename";

export default function Router({ url }) {
  let page;
  if (url.pathname === "/") {
    page = <BlogIndexPage />;
  } else {
    const postSlug = sanitizeFilename(url.pathname.slice(1));
    page = <BlogPostPage postSlug={postSlug} />;
  }
  return <BlogLayout>{page}</BlogLayout>;
}
