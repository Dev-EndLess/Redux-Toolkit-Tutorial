import AddPostForm from "./app/features/posts/AddPostForm"
import PostsList from "./app/features/posts/PostsList";
import SinglePostPage from "./app/features/posts/SinglePostPage";
import EditPostForm from "./app/features/posts/EditPostForm";
import Layout from "./app/components/Layout";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
