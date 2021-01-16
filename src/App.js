// USING ES6 MODULES
// <npm install react-router-dom> to get these
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// STYLE
import "./App.css";

// COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>{/* <Route path="/" exact /> */}</Switch>
    </Router>
  );
}

export default App;
