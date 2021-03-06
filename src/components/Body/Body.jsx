import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import PostDetails from "../Posts/PostDetails/PostDetails";
import NotFound from "../NotFound/NotFound";

function Body() {
  return (
    <div className="container">
      <section className="block">
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/articles">
            <Posts />
          </Route>
          <Route path="/articles/:id">
            <PostDetails />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default Body;
