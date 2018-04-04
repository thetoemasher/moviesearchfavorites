import React, { Component } from 'react';
import List from './List';

function Favorites(props) {
    let { movieList, img_url, favoriteMovie, updateRatingMovies, findSimilar } = props;   
    return (
        <div>
            <List 
                list={movieList} 
                img_url={img_url} 
                callback={favoriteMovie} 
                text="Favorite" 
                styleName="is-primary"
                updateRatingAll={updateRatingMovies}
                findSimilar={findSimilar} />
        </div>
    );
}

export default Favorites;