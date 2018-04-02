import React, { Component } from 'react';
import List from './List';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let { movieList, img_url, favoriteMovie, showFavs, updateRatingMovies, findSimilar } = this.props;
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
                    updateRatingAll={updateRatingMovies}
                    findSimilar={findSimilar} />
            </div>
        );
    }
}


export default Favorites;