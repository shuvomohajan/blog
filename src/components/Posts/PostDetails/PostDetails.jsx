import { useHistory, useParams } from "react-router-dom";
import useFatch from "../../../hooks/useFatch";
import style from "./PostDetails.module.scss";

function PostDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [post, isLoading, error] = useFatch(
    "http://localhost:8000/posts/" + id
  );

  return (
    <>
      <button className={style.backBtn} onClick={() => history.go(-1)}>&#8592;</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {post && (
        <div className={style.postDetails}>
          <h2 className={style.title}>{post.title}</h2>
          <p className={style.date}>{post.date}</p>
          <div className={style.details}>{post.details}</div>
        </div>
      )}
    </>
  );
}

export default PostDetails;
