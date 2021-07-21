import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";

function Body({ posts, isLoading, error }) {
  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <Switch>
        <Route exact path="/">
          {posts && <Posts posts={posts} />}
        </Route>
        <Route path="/articles">{posts && <Posts posts={posts} />}</Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default Body;
