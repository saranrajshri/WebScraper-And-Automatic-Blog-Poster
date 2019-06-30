import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from './components/Header';
import Footer from './components/Footer';
import HamOrSpam from "./components/HamOrSpam";
import MovieRecommendation from "./components/MovieRecommendation";
import Blog from './components/Blog'

import { BrowserRouter as Router } from "react-router-dom";
const Route = require("react-router-dom").Route;

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <HamOrSpam /> */}
      {/*<MovieRecommendation />*/}
      <Router>
      	<Route path="/automatedBlogPost" exact component={Blog}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
