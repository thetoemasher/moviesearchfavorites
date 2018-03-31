import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import List from './components/List'
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
      img_url: 'https://image.tmdb.org/t/p/w200/'
    }
    this.searchMovieList = this.searchMovieList.bind(this);
    this.favoriteMovie = this.favoriteMovie.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.searchFavorites = this.searchFavorites.bind(this);
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
      this.setState( {movieList: res.data})
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
    this.setState({ favoriteList: res.data});
  })
}

addRating() {

}

  render() {
    let { movieList, userInput, img_url, favoriteList, base_url } = this.state;
  
    return (
      <div className="App">
        <h1>Search for Movies</h1>
        <h1>Add to Favorites</h1>
        <input placeholder="Search for a Movie" onChange={(e) => {
          this.updateUserInput(e.target.value)}}/>
        
        <Button text="Search Movies" 
        callback={this.searchMovieList} 
        val={userInput}/>

        <Button text="Search Favorites" 
        callback={this.searchFavorites} 
        val={userInput}/>

        <Movies 
        input={userInput}
        movieList={movieList} 
        img_url={img_url} 
        searchMovies={this.searchMovieList} 
        favoriteMovie={this.favoriteMovie}/>

        <Favorites 
        input={userInput}
        favorite={favoriteList}
        img_url={img_url} 
        base_url={base_url} 
        deleteFav={this.deleteFavorite} 
        searchFavs={this.searchFavorites} />
      </div>
    );
  }
}

export default App;
