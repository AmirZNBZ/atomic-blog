import FormAddPost from "./FormAddPost";
import Posts from "./Posts";
import { usePosts } from "./context/PostContext";

function Main() {
  const { posts, onAddPost } = usePosts();
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
