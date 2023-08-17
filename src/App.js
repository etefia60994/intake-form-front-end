import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Navbar , Nav , NavDropdown } from 'react-bootstrap';
import AddResourceCategory from './components/AddResourceCategory'
import ResourceCategory from './components/ResourceCategory'
import ResourceCategoryList from "./components/ResourceCategoryList"
import ContactInfo from './components/ContactInfo'
import ClientForm from './components/ClientInfo'
function App() {
  return (
    <Router>
      <div className="App">
        <span>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Service Providers" id="basic-nav-dropdown">
        <NavDropdown.Item href="/serviceProviders">All Service Providers</NavDropdown.Item>
        <NavDropdown.Item href="/serviceProviders/add">Add Service Providers</NavDropdown.Item>
        <NavDropdown.Item href="/serviceProviders/:id">Search Service Providers</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Clients" id="basic-nav-dropdown">
        <NavDropdown.Item href="/resourceCategories">All Clients</NavDropdown.Item>
        <NavDropdown.Item href="/clientInfo">Add Clients</NavDropdown.Item>
        <NavDropdown.Item href="/resourceCategories/:id">Update/Delete Clients</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Resource Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/resourceCategories">All Resource Categories</NavDropdown.Item>
        <NavDropdown.Item href="/resourceCategories/add">Add Resource Categories</NavDropdown.Item>
        <NavDropdown.Item href="/resourceCategories/:id">Search for Resource Categories</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
</Navbar>
</span>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/resourceCategories"]} component={ResourceCategoryList} />
              <Route exact path="/resourceCategories/add" component={AddResourceCategory} />
              <Route path="/resourceCategories/:id" component={ResourceCategory} />
              <Route path="/contactInfo/" component={ContactInfo} />
              <Route path="/clientInfo/" component={ClientForm} />

            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
