import React, { Component } from 'react';
import List from './List'

class Favorites extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let { favorite, img_url, deleteFav, showFavs, updateRatingFavs, findSimilar } = this.props;
        let visible = 'is-hidden';
        if (showFavs) {
            visible = "";
        }
        return (
            <div className={visible}>
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
}


export default Favorites;