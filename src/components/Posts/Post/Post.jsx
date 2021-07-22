import { Link } from "react-router-dom";
import style from "./Post.module.scss";

function Post({ post }) {
  return (
    <Link to={`/articles/${post.id}`} className={style.postLink}>
      <div className={style.post}>
        <div className={style.content}>
          <h2 className={style.title}>{post.title}</h2>
          <p className={style.body}>{post.body}</p>
        </div>
      </div>
    </Link>
  );
}

export default Post;
