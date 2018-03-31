import React, { Component } from 'react';
import './Movies.css';
import List from './List';
import axios from 'axios';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    
    updateUserInput(val) {
        this.setState({ userInput: val });
    }


    render() {
        // let {userInput} = this.state;
        let {movieList, img_url, searchMovies, favoriteMovie, input} = this.props;
        return (
            <div className="MovieList">
                {/* <input value={userInput} placeholder='Search for a Movie' onChange={(e) => this.updateUserInput(e.target.value)}/> */}
                {/* <button onClick={() => searchMovies(input)}>Search Movies</button> */}
                <div className="Movies_List">
                    <List list={movieList} img_url={img_url} callback={favoriteMovie} text="Favorite" styleName="favButton"/>
                </div>
            </div>
        );
    }
}


export default Favorites;