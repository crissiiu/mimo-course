"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addBlog, likeBlog as likeBlogService } from "../services/blog";

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  addBlog(title, author, url);
  revalidatePath("/blogs");
  redirect("/blogs");
};

export const likeBlog = async (formData: FormData) => {
  const rawId = formData.get("id");
  const id = Number(rawId);
  if (!Number.isNaN(id)) {
    console.log("likeBlog id:", id);
    likeBlogService(id);
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${id}`);
  }
};
