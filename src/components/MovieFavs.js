import React, { Component } from 'react';
import axios from 'axios';
import {Switch, Route, Link} from 'react-router-dom'
import Button from './Button';
import Movies from './Movies';
import Favorites from './Favorites'

class MovieFavs extends Component {
    constructor() {
        super();
        this.state = {
            movieList: [],
            favoriteList: [],
            userInput: ''
        }
        this.searchMovieList = this.searchMovieList.bind(this);
        this.favoriteMovie = this.favoriteMovie.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
        this.searchFavorites = this.searchFavorites.bind(this);
        this.updateRatingFavs = this.updateRatingFavs.bind(this);
        this.updateRatingMovies = this.updateRatingMovies.bind(this);
        this.findSimilar = this.findSimilar.bind(this);
    }

    componentDidMount() {
        axios.get(`${this.props.base_url}movies/favorites`).then(res => {
          this.setState({favoriteList: res.data})
        })
      }
    
      updateUserInput(val) {
        this.setState({ userInput: val })
      }
    
      searchMovieList(search){
        axios.get(`${this.props.base_url}movies/search/${search}`).then(res => {
          this.setState( {movieList: res.data,  userInput: ''})
        });
      }
    
      favoriteMovie(movie) {
        axios.post(`${this.props.base_url}movies/favorites`, movie).then(res => {
          this.setState({favoriteList: res.data})
        })
      }
    
      deleteFavorite(val) {
        axios.delete(`${this.props.base_url}movies/favorites/${val.id}`).then(res => {
            this.setState({favoriteList: res.data})
          })
    }
    
    searchFavorites(search) {
      axios.get(`${this.props.base_url}movies/favorites/search/${search}`).then(res => {
        this.setState({ favoriteList: res.data });
      })
    }
    
    updateRatingMovies(id, rating) {
      axios.put(`${this.props.base_url}movies/${id}?rating=${rating}`).then(res => {
        this.setState({ movieList: res.data})
      })
    }
    
    updateRatingFavs(id, rating) {
      axios.put(`${this.props.base_url}favorites/${id}?rating=${rating}`).then(res => {
        this.setState({ favoriteList: res.data})
      })
    }
    
    findSimilar(id) {
      axios.get(`${this.props.base_url}movies/similar/${id}`).then(res => {
        this.setState({ movieList: res.data })
      })
    }

    render() {
        let { movieList, userInput, favoriteList } = this.state;
        let { base_url, img_url } = this.props;
        
        return (
            <div>
                <div className={`columns`}>
                    <input 
                    value={userInput} 
                    className={`input is-rounded`}
                    placeholder="Search for a Movie" 
                    onChange={(e) => {
                        this.updateUserInput(e.target.value)}}/>

                    <Link to='/'><Button text="Search Movies" 
                    callback={this.searchMovieList} 
                    val={userInput} 
                    styleName={`is-link`} /></Link>
                    
                    <Link to='/favorites'><Button text="Search Favorites" 
                    callback={this.searchFavorites} 
                    val={userInput}
                    styleName={`is-info is-outlined  search-favs`} /></Link>

                </div>
                <div className={`All-Lists`}>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Movies 
                                movieList={movieList} 
                                img_url={img_url} 
                                favoriteMovie={this.favoriteMovie}
                                updateRatingMovies={this.updateRatingMovies}
                                findSimilar={this.findSimilar} />)} />

                        <Route path='/favorites' render={()=> (
                            <Favorites
                                favorite={favoriteList}
                                img_url={img_url} 
                                base_url={base_url} 
                                deleteFav={this.deleteFavorite}
                                updateRatingFavs={this.updateRatingFavs}
                                findSimilar={this.findSimilar} />)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MovieFavs;