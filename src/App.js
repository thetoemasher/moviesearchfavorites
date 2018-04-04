import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {HashRouter, Switch, Route} from 'react-router-dom'
import MovieFavs from './components/MovieFavs'
import Shows from './components/Shows';
import People from './components/People';
import NavBar from './components/NavBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      base_url: 'http://localhost:7859/api/',
      img_url: 'https://image.tmdb.org/t/p/w200/',
    }
  }



  render() {
    let { base_url, img_url } = this.state;

    return (
      <HashRouter>
        <div>
          <div>
            <NavBar />
          </div>
          <Switch>
            <Route path='/tv' render={() => (<Shows img_url={img_url} base_url={base_url} />)} />  
            <Route path='/people' render={() => (<People img_url={img_url} base_url={base_url} />)} />
            <Route path='/' render={() => (<MovieFavs base_url={base_url} img_url={img_url} />)} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;