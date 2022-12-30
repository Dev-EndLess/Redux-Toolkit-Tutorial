import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  selectAllStatus,
  selectAllErrors,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectAllStatus);
  const errors = useSelector(selectAllErrors);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => (
      <PostExcerpt post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{errors}</p>;
  }

  return (
    <section>
      <h2>Post</h2>
      {content}
    </section>
  );
};

export default PostsList;
