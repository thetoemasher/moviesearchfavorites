import React, { Component } from 'react';
import List from './List';
// import './Movies.css';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let { movieList, img_url, favoriteMovie, showFavs, updateRatingMovies } = this.props;
        let visible = '';
        if (showFavs) {
            visible = "is-hidden";
        }
        return (
            <div className={`${visible}`}>
                <List 
                list={movieList} 
                img_url={img_url} 
                callback={favoriteMovie} 
                text="Favorite" 
                styleName="is-primary"
                updateRatingAll={updateRatingMovies} />
            </div>
        );
    }
}


export default Favorites;