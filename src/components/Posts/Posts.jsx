import useFatch from "../../hooks/useFatch";
import Post from "./Post/Post";
import style from "./Posts.module.scss";

function Posts() {
  const [posts, isLoading, error] = useFatch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className={style.posts}>
        {posts && posts.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </>
  );
}

export default Posts;
