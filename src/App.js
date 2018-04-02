import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Favorites from './components/Favorites';
import Movies from './components/Movies';
import Button from './components/Button';
import Shows from './components/Shows';
import People from './components/People';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      favoriteList: [],
      userInput: '',
      base_url: 'http://localhost:7859/api/',
      img_url: 'https://image.tmdb.org/t/p/w200/',
      showFavorites: false,
      showTV: false,
      showPeople: false,
    }

    this.searchMovieList = this.searchMovieList.bind(this);
    this.favoriteMovie = this.favoriteMovie.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.searchFavorites = this.searchFavorites.bind(this);
    this.updateRatingFavs = this.updateRatingFavs.bind(this);
    this.updateRatingMovies = this.updateRatingMovies.bind(this);
    this.toggleFavs = this.toggleFavs.bind(this);
    this.toggleMovies = this.toggleMovies.bind(this);
    this.toggleShows = this.toggleShows.bind(this);
    this.togglePeople = this.togglePeople.bind(this);
    this.findSimilar = this.findSimilar.bind(this);
  }

  componentDidMount() {
    axios.get(`${this.state.base_url}movies/favorites`).then(res => {
      this.setState({favoriteList: res.data})
    })
  }

  updateUserInput(val) {
    this.setState({ userInput: val })
  }

  searchMovieList(search){
    axios.get(`${this.state.base_url}movies/search/${search}`).then(res => {
      this.setState( {movieList: res.data, showFavorites: false, userInput: ''})
    });
  }

  favoriteMovie(movie) {
    axios.post(`${this.state.base_url}movies/favorites`, movie).then(res => {
      this.setState({favoriteList: res.data})
    })
  }

  deleteFavorite(val) {
    axios.delete(`${this.state.base_url}movies/favorites/${val.id}`).then(res => {
        this.setState({favoriteList: res.data})
      })
}

searchFavorites(search) {
  axios.get(`${this.state.base_url}movies/favorites/search/${search}`).then(res => {
    this.setState({ favoriteList: res.data, showFavorites: true});
  })
}

toggleFavs() {
  this.setState({showFavorites: true, showTV: false, showPeople: false});
}

toggleMovies() {
  this.setState({ showFavorites: false, showTV: false, showPeople: false })
}

updateRatingMovies(id, rating) {
  axios.put(`${this.state.base_url}movies/${id}?rating=${rating}`).then(res => {
    this.setState({ movieList: res.data})
  })
}

updateRatingFavs(id, rating) {
  axios.put(`${this.state.base_url}favorites/${id}?rating=${rating}`).then(res => {
    this.setState({ favoriteList: res.data})
  })
}

findSimilar(id) {
  axios.get(`${this.state.base_url}movies/similar/${id}`).then(res => {
    this.setState({ movieList: res.data, showFavorites: false, showTV: false, showPeople: false })
  })
}

toggleShows() {
  this.setState({ showTV: true, showFavorites: false, showPeople: false})
}

togglePeople() {
  this.setState({ showPeople: true, showFavorites: false, showTv: false })
}

  render() {
    let { movieList, userInput, img_url, favoriteList, base_url, showFavorites, showTV, showPeople } = this.state;
    let movieFavsVisible = "";
    let tvVisible = "is-hidden"
    let peopleVisible = "is-hidden"
    if(showTV) {
      movieFavsVisible = "is-hidden";
      tvVisible = "";
      peopleVisible = "is-hidden"
    }
    if(showPeople) {
      movieFavsVisible = "is-hidden";
      tvVisible = "is-hidden"
      peopleVisible = "";
    }

    return (
      <div className="App">
      <header className="hero is-primary is-medium">
        <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-end">

              <Button val=""
              styleName="is-primary nav-button" 
              callback={this.toggleMovies}
              text="Show Movies" />
            
              <Button val=""
              styleName="is-primary nav-button" 
              callback={this.toggleFavs}
              text="Show Favorites" />
            
              <Button val=""
              styleName="is-primary nav-button"
              callback={this.toggleShows}
              text="Show TV" />
            
              <Button val=""
              styleName="is-primary nav-button"
              callback={this.togglePeople}
              text="Show People" />
            
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
      <div className={`columns`}>

        <input 
          value={userInput} 
          className={`input is-rounded ${movieFavsVisible}`}
          placeholder="Search for a Movie" 
          onChange={(e) => {
            this.updateUserInput(e.target.value)}}/>

        <Button text="Search Movies" 
          callback={this.searchMovieList} 
          val={userInput} 
          styleName={`is-link ${movieFavsVisible} search`} />
        
        <Button text="Search Favorites" 
          callback={this.searchFavorites} 
          val={userInput}
          styleName={`is-info is-outlined ${movieFavsVisible} search`} />

      </div>
      <div className={`${movieFavsVisible}`}>

        <Movies 
          showFavs={showFavorites}
          movieList={movieList} 
          img_url={img_url} 
          favoriteMovie={this.favoriteMovie}
          updateRatingMovies={this.updateRatingMovies}
          findSimilar={this.findSimilar} />

        <Favorites
          showFavs={showFavorites}
          favorite={favoriteList}
          img_url={img_url} 
          base_url={base_url} 
          deleteFav={this.deleteFavorite}
          updateRatingFavs={this.updateRatingFavs}
          findSimilar={this.findSimilar} />
        </div>
        <div className={tvVisible}>

          <Shows 
          img_url={img_url} 
          base_url={base_url} />
        
        </div>
        <div className={peopleVisible}>
        
            <People 
            img_url={img_url} 
            base_url={base_url} />
        
        </div>
      </div>
    );
  }
}

export default App;