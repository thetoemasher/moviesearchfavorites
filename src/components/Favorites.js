import React, { Component } from 'react';
import List from './List'
// import './Favorites.css';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let { favorite, img_url, deleteFav, showFavs, showModal, toggleModal, updateRatingFavs } = this.props;
        let visible = 'is-hidden';
        if (showFavs) {
            visible = "";
        }
        return (
            <div className={`${visible}`}>
                <List 
                list={favorite} 
                img_url={img_url} 
                callback={deleteFav} 
                text="Delete" 
                styleName="is-danger"
                showModal={showModal}
                toggleModal={toggleModal}
                updateRatingAll={updateRatingFavs} />
            </div>
        );
    }
}


export default Favorites;