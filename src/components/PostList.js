import { Space } from "antd";

import Post from "./Post";

export default function PostList({ posts = [] }) {
  return (
    <Space direction="vertical">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </Space>
  );
}
