import { likeBlog } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blog";
import { notFound } from "next/navigation";

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = getBlogById(Number(id));
  if (!blog) {
    notFound();
  }

  return (
    <form action={likeBlog}>
      <input type="hidden" name="id" value={blog.id} />
      <h2>Title: {blog.title}</h2>
      <h3>Author: {blog.author}</h3>
      <p>Url: {blog.url}</p>
      <p>Likes: {blog.likes}</p>
      <button type="submit" value={blog.id}>
        Like
      </button>
    </form>
  );
};
export default Blog;
