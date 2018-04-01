import React, { Component } from 'react';
import './App.css';
// import 'bulma/css/bulma.css'
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

addRating() {

}

toggleFavs() {
  this.setState({showFavorites: !this.state.showFavorites});
}

  render() {
    let { movieList, userInput, img_url, favoriteList, base_url, showFavorites } = this.state;
  
    return (
      <div className="App">
        <h1 className="title is-1">Movie Search</h1>
        {/* <h1 className="title">Add to Favorites</h1> */}
        
        
        <div className="field is-grouped column">
          <div className="control">
            <input className="input is-rounded" placeholder="Search for a Movie" onChange={(e) => {
              this.updateUserInput(e.target.value)}}/>
          </div>
          <div className="control">
            <Button text="Search Movies" 
            callback={this.searchMovieList} 
            val={userInput} 
            styleName="is-link is-outlined" />
          </div>
          <div className="contorl">
            <Button text="Search Favorites" 
            callback={this.searchFavorites} 
            val={userInput}
            styleName="is-info is-outlined" />
          </div>
        
        </div>
              <button className="button" onClick={() => {this.toggleFavs()}}>Show Favorites</button>

        <div className="">
          <Movies 
          showFavs={showFavorites}
          movieList={movieList} 
          img_url={img_url} 
          favoriteMovie={this.favoriteMovie}/>

          <Favorites
          showFavs={showFavorites}
          favorite={favoriteList}
          img_url={img_url} 
          base_url={base_url} 
          deleteFav={this.deleteFavorite} />

        </div>
      </div>
    );
  }
}

export default App;