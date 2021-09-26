import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./MainPage/Main";
import ProductsContainer from "./List/ProductsContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={ProductsContainer} />
      </Switch>
    </Router>
  );
}

export default App;
