import React, { Component } from 'react';
// import './Movies.css';
import List from './List';

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
        let {movieList, img_url, searchMovies, favoriteMovie, input, showFavs} = this.props;
        let visible = '';
        if (showFavs) {
            visible = "is-hidden";
        }
        return (
            <div className={`${visible}`}>
                {/* <input value={userInput} placeholder='Search for a Movie' onChange={(e) => this.updateUserInput(e.target.value)}/> */}
                {/* <button onClick={() => searchMovies(input)}>Search Movies</button> */}
                {/* <div className="Movies_List"> */}
                    <List list={movieList} img_url={img_url} callback={favoriteMovie} text="Favorite" styleName="is-primary"/>
                </div>
            // </div>
        );
    }
}


export default Favorites;