import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import AddResourceCategory from './components/AddResourceCategory'
import ResourceCategory from './components/ResourceCategory'
import ResourceCategoryList from "./components/ResourceCategoryList"
import LoginInput from "./components/LoginInput"
import Register from "./components/RegisterCaseManagerInput"

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/resourceCategories" className="navbar-brand">
              BFL Service Match
          </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/resourceCategories"} className="nav-link">
                  Resource Categories
              </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add Resource Category
              </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={ "/resourceCategories"} component={ResourceCategoryList} />
              <Route exact path="/add" component={AddResourceCategory} />
              <Route path="/resourceCategories/:id" component={ResourceCategory} />
              <Route exact path="/login" component={LoginInput} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
