import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Favorites from './components/Favorites';
import Movies from './components/Movies'
import Button from './components/Button'

class App extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      favoriteList: [],
      userInput: '',
      base_url: 'http://localhost:7859/api/movies/',
      img_url: 'https://image.tmdb.org/t/p/w200/',
      showFavorites: false,
    }
    this.searchMovieList = this.searchMovieList.bind(this);
    this.favoriteMovie = this.favoriteMovie.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.searchFavorites = this.searchFavorites.bind(this);
    this.updateRatingFavs = this.updateRatingFavs.bind(this);
    this.updateRatingMovies = this.updateRatingMovies.bind(this);
    this.toggleFavs = this.toggleFavs.bind(this);
  }

  componentDidMount() {
    axios.get(`${this.state.base_url}favorites`).then(res => {
      this.setState({favoriteList: res.data})
    })
  }

  updateUserInput(val) {
    this.setState({ userInput: val })
  }

  searchMovieList(search){
    axios.get(`${this.state.base_url}search/${search}`).then(res => {
      this.setState( {movieList: res.data, showFavorites: false})
    });
  }

  favoriteMovie(movie) {
    axios.post(`${this.state.base_url}favorites`, movie).then(res => {
      this.setState({favoriteList: res.data})
    })
  }

  deleteFavorite(val) {
    axios.delete(`${this.state.base_url}favorites/${val.id}`).then(res => {
        this.setState({favoriteList: res.data})
      })
}

searchFavorites(search) {
  axios.get(`${this.state.base_url}favorites/search/${search}`).then(res => {
    this.setState({ favoriteList: res.data, showFavorites: true});
  })
}

toggleFavs() {
  this.setState({showFavorites: !this.state.showFavorites});
}

updateRatingMovies(id, rating) {
  axios.put(`${this.state.base_url}${id}?rating=${rating}`).then(res => {
    this.setState({ movieList: res.data})
  })
}

updateRatingFavs(id, rating) {
  axios.put(`${this.state.base_url}favorites/${id}?rating=${rating}`).then(res => {
    this.setState({ favoriteList: res.data})
  })
}

  render() {
    let { movieList, userInput, img_url, favoriteList, base_url, showFavorites, showModal } = this.state;

    return (
      <div className="App">
      <header className="hero is-primary is-medium">
        <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-end">
              <Button val=""
              styleName="is-primary" 
              callback={this.toggleFavs}
              text="Show Favorites" />
            </div>
          </div>
        </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Movie Search</h1>
          </div>
        </div>

      </header>
        <div className="columns">
        <input 
          value={userInput} 
          className="input is-rounded" 
          placeholder="Search for a Movie" 
          onChange={(e) => {
            this.updateUserInput(e.target.value)}}/>

          <Button text="Search Movies" 
            callback={this.searchMovieList} 
            val={userInput} 
            styleName="is-link" />
          <Button text="Search Favorites" 
            callback={this.searchFavorites} 
            val={userInput}
            styleName="is-info is-outlined" />
        </div>

        <div className="">
          <Movies 
          showFavs={showFavorites}
          movieList={movieList} 
          img_url={img_url} 
          favoriteMovie={this.favoriteMovie}
          updateRatingMovies={this.updateRatingMovies} />

          <Favorites
          showFavs={showFavorites}
          favorite={favoriteList}
          img_url={img_url} 
          base_url={base_url} 
          deleteFav={this.deleteFavorite}
          updateRatingFavs={this.updateRatingFavs} />

        </div>
      </div>
    );
  }
}

export default App;