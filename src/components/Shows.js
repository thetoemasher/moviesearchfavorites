import React, { Component } from 'react';
import Button from './Button'
import ShowsList from './ShowsList'
import axios from 'axios'

class Shows extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            showsList: [],
        }
        this.searchShows = this.searchShows.bind(this);
    }

    updateUserInput(val) {
        this.setState({ userInput: val })
    }

    searchShows(show) {
        axios.get(`${this.props.base_url}shows/search/${show}`).then(res => {
            this.setState({ showsList: res.data });
        })
    }

    render() {
        let { showsList, userInput } = this.state;
        let { img_url } = this.props;
        return (
            <div>
                <div className="columns ">
        
                    <input 
                        className="input is-rounded" 
                        placeholder="Search for a TV Show" 
                        onChange={ (e) => { this.updateUserInput(e.target.value) }} />

                    <Button 
                        text="Search TV Shows" 
                        callback={this.searchShows} 
                        val={userInput} styleName="is-link search" />
                </div>
                <div className="All-Lists">
                    <ShowsList 
                        list={showsList} 
                        img_url={img_url} />
                </div>
                    
            </div>
        );
    }
}

export default Shows;