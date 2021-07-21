import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import useFatch from "./hooks/useFatch";

function App() {
  const [posts, isLoading, error] = useFatch("http://localhost:8000/posts");

  return (
    <Router>
      <Navbar />
      <Body posts={posts} isLoading={isLoading} error={error} />
    </Router>
  );
}

export default App;
