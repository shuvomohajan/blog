import style from "./Post.module.scss";

function Post({ post }) {
  return (
    <div className={style.post}>
      <div className={style.content}>
        <h2 className={style.title}>{post.title}</h2>
        <p className={style.date}>{post.date}</p>
        <p className={style.details}>{post.details}</p>
      </div>
    </div>
  );
}

export default Post;
