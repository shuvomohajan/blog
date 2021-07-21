import Post from "./Post/Post";
import style from "./Posts.module.scss";

function Posts({ posts }) {
  return (
    <div className={style.posts}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
