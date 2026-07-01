import Link from "next/link";
import { getBlogs } from "../services/blog";

const Blog = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;
  const keyword = filter?.trim().toLowerCase() ?? "";
  const allBlogs = [...getBlogs()].sort((a, b) => b.likes - a.likes);
  const blogs = keyword
    ? allBlogs.filter((blog) =>
        blog.title.trim().toLowerCase().includes(keyword),
      )
    : allBlogs;

  return (
    <div>
      <form action="/blogs" method="get" className="mb-4 flex gap-2">
        <input
          type="text"
          name="filter"
          defaultValue={filter ?? ""}
          placeholder="Search by title"
          className="border px-2 py-1"
        />
        <button type="submit" className="border px-3 py-1">
          Search
        </button>
      </form>

      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h2>Title: {blog.title}</h2>
              <p>Author: {blog.author}</p>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
              <p>Likes: {blog.likes}</p>

              <Link href={`/blogs/${blog.id}`}>Read More</Link>
              <hr />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Blog;
