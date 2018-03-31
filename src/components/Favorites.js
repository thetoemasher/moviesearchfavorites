import React, { Component } from 'react';
import List from './List'
import axios from 'axios';
// import './Favorites.css';

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
        let {favorite, img_url, deleteFav, searchFavs, input} = this.props;
        return (
            <div className="column">
                {/* <input value={userInput} placeholder="Search your favorites" onChange={(e) => {this.updateUserInput(e.target.value)}}/> */}
                {/* <button onClick={() => {searchFavs(input)}}>Search Favorites</button> */}
                <div className="">

                <List list={favorite} img_url={img_url} callback={deleteFav} text="Delete" styleName="is-danger"/>
                </div>
            </div>
        );
    }
}


export default Favorites;