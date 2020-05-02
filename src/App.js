import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Post from './components/Post';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:post_id" component={Post} />
          <Route path="/services/:service_name" component={Services} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
