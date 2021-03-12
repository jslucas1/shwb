//create a component - file that holds all the logic. self contained piece of code
import React, { Component } from 'react'; 
import "./App.css";
import { 
  BrowserRouter as Router, Route, Switch, Link, Redirect
} from "react-router-dom";
import NavBar from './components/Navbar';
import './App.css';
//import all pages
import MainPage from "./pages";

import NotFoundPage from "./pages/404";
import LoginPage from "./pages/login";

//class  App extends Component{
//render() {
  //router can only have one child - switch is child below
function App(){
  return (
    <div className='App'>
      <h1>App page </h1>
  <Router>
    <NavBar />
    <Switch> 
    <Route  path='/'exact />
    <Route exact path="/" component={MainPage} />
    <Route exact path="/404"component={NotFoundPage} />
    <Route exact path="/login"component={LoginPage} />
    <Redirect to="/404"/> 
    </Switch>
  
  </Router>
  </div>
  ); 
}
 

//}
  
//}


export default App;