import { useHistory } from "react-router-dom";
import style from "./NotFound.module.scss";

function NotFound() {
  const history = useHistory();

  return (
    <div className={style.notFound}>
      <h2>Not Found</h2>
      <button className={style.backBtn} onClick={() => history.push("/")}>
        &#8592; Go back to home
      </button>
    </div>
  );
}

export default NotFound;
