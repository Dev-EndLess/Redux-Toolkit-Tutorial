import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <PostList/>
    </div>
  );
}

export default App;
