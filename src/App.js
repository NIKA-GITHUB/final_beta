import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home_component/Home";
import Header from "./header_component/Header";


function App() {
  return (
    
    <div className="app">    
    
    <Router>      
      
      <Switch>        
        
        <Route path="/">
          <Header />           
          <Home />        
        </Route>      
        </Switch>    
        </Router>  
        </div>
        
        );
      }
      
      export default App;