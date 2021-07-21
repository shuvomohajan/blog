import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";

function Body() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/articles">
          <Posts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default Body;
