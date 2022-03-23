import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../index.css';
import history from "../history";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
    return (
        <>
            
            <Router history={history}>
            <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' exact component={Service} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                </Switch>
            <Footer/>
            </Router>
        </>
    );
}

export default App;