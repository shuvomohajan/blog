import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
    </Router>
  );
}

export default App;
