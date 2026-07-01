const blogs = [
  {
    id: 1,
    title: "Brazil vs Nhật Bản",
    author: "Vô Danh",
    url: "https://localhost:3000",
    likes: 2,
  },
  {
    id: 2,
    title: "Đức vs Paraguay",
    author: "Bồ Nha Đào",
    url: "https://localhost:3000",
    likes: 2,
  },
];

let nextId = blogs.length + 1;

export const getBlogs = () => {
  return blogs;
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({
    id: nextId++,
    title,
    author,
    url,
    likes: 0,
  });
};

export const likeBlog = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    blog.likes++;
  }
}
