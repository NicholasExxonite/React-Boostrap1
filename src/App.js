import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {Contact} from './Contact';
import {About} from './About';
import NoMatch from  './NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigaitonBar';
import Jumbotron from './components/Jumbotron';

class App extends React.Component{
  render(){
    return(
      // Creates a wrapper, so you don't have to se a div
      //Use switch to be able to switch between different routes
      // match exactly so it doesn't match with a bunch of things - exact path="/"
      //if it doesn't match anything will return a 404 error page
   <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch}/>
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
    );
  }
}

export default App;
