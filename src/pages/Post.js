import { useState, useEffect } from "react";
import { Button, Input, Row, Col, Space } from "antd";

import PostList from "../components/PostList";
import { fetchPosts } from "../services/post.service";

export default function PostPage({ test }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((json) => {
      setPosts(json);
    });
  }, []);

  return (
    <div className="container">
      <h2>Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}
