import { readFile } from "fs/promises";

export function BlogPostPage({ postSlug }) {
  return (
    <div className="animate-color">
      <Post slug={postSlug} />
    </div>
  );
}

export default async function Post({ slug }) {
  let content;
  try {
    content = await readFile("./posts/" + slug + ".txt", "utf8");
  } catch (err) {
    throwNotFound(err);
  }
  return (
    <section className="bg-gray-300 rounded-full p-4">
      <h2>
        <a href={"/" + slug}>{slug}</a>
      </h2>
      <article>{content}</article>
    </section>
  );
}
function throwNotFound(cause) {
  const notFound = new Error("Not found.", { cause });
  notFound.statusCode = 404;
  throw notFound;
}
