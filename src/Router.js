import { HashRouter, Routes, Route } from "react-router-dom";

import PostPage from "./pages/Post";
import EditPost from "./pages/EditPost";

export default function Router() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<PostPage />} />
          <Route path="posts" element={<PostPage />} />
          <Route path="posts/:id" element={<EditPost />} />
        </Routes>
      </HashRouter>
    </>
  );
}
