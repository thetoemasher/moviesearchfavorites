import React, { Component } from 'react';
import List from './List'

function Favorites(props) {
    let { favorite, img_url, deleteFav, updateRatingFavs, findSimilar } = props;
    return (
        <div>
            <List 
                list={favorite} 
                img_url={img_url} 
                callback={deleteFav} 
                text="Delete" 
                styleName="is-danger"
                updateRatingAll={updateRatingFavs}
                findSimilar={findSimilar} />
        </div>
    );
}


export default Favorites;