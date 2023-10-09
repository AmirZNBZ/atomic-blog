import List from "./List";
import { usePosts } from "./context/PostContext";

function Posts() {
  const { posts } = usePosts();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
