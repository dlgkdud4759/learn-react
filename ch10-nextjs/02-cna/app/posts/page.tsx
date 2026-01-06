import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page",
};

export default async function PostsPage() {
  // 3초 후에 resolve 됨
  await new Promise((resolve) => setTimeout(resolve, 1000 * 3));
  return <h1>목록 조회</h1>;
}
