// USING ES6 MODULES
// <npm install react-router-dom> to get these
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Recipes from "./components/pages/Recipes.js";
import Restaurants from "./components/pages/Restaurants.js";

// STYLE
import "./App.css";

// COMPONENTS
import Navbar from "./components/Navbar";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/restaurants" component={Restaurants} />
      </Switch>
    </Router>
  );
}

export default App;
