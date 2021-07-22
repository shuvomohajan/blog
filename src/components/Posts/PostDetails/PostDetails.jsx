import { useHistory, useParams } from "react-router-dom";
import useFatch from "../../../hooks/useFatch";
import style from "./PostDetails.module.scss";

function PostDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [post, isLoading, error] = useFatch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  return (
    <>
      <button className={style.backBtn} onClick={() => history.go(-1)}>&#8592;</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {post && (
        <div className={style.postDetails}>
          <h2 className={style.title}>{post.title}</h2>
          <p className={style.user}>User ID : {post.userId}</p>
          <div className={style.body}>{post.body}</div>
        </div>
      )}
    </>
  );
}

export default PostDetails;
