//create a component - file that holds all the logic. self contained piece of code
import React from "react"
//import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



//import all pages
import Signup from "./Signup"
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
//import MainPage from ".";
//import NotFoundPage from "./404";
//import Signup from "./Signup"


function App() {
//render() {
  //router can only have one child - switch is child below
  return (
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
        </div>
    </Container>
  )
}


export default App

/*{ <Router>
  <Switch> 
  <Route exact path="/" component={MainPage} />
  <Route exact path="/404"component={NotFoundPage} />
  <Route exact path="/login"component={SignUpPage} />
  <Redirect to="/404"/> 
  </Switch>
</Router> }
);*/ 

//} render