import "./App.css";
import Recipes from "./pages/Recipes";
import AddRecipes from "./pages/AddRecipes";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/recipes" className="btn1"><button> რეცეპტების სია</button></Link>
        <Link to="/add-recipes" className="btn2"><button>დამატების გვერდი</button></Link>

        <Switch>
          <Route path="/recipes">
            <RecipesRouter />
          </Route>
          <Route path="/add-recipes">
            <AddRecipesRouter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function RecipesRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
      </div>
    </Router>
  );
}

function AddRecipesRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/add-recipes">
          <AddRecipes />
        </Route>
      </div>
    </Router>
  );
}

export default App;