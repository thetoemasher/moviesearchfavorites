import React, { Component } from 'react';
import Button from './Button'
import PeopleList from './PeopleList'
import axios from 'axios'

class People extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            peopleList: [],
        }
        this.searchPeople = this.searchPeople.bind(this);
    }

    updateUserInput(val) {
        this.setState({ userInput: val })
    }

    searchPeople(person) {
        axios.get(`${this.props.base_url}people/search/${person}`).then(res => {
            this.setState({ peopleList: res.data })
            console.log(this.state.peopleList);
        })
    }

    render() {
        let { peopleList, userInput } = this.state;
        let { img_url } = this.props;
        return (
            <div>
                <div className="columns">

                    <input 
                        className="input is-rounded" 
                        placeholder="Search for a TV Show" 
                        onChange={ (e) => { this.updateUserInput(e.target.value) }} />
                        
                    <Button 
                        text="Search People" 
                        callback={this.searchPeople} 
                        val={userInput} 
                        styleName="is-link" />

                 </div>

                <PeopleList 
                    list={peopleList} 
                    img_url={img_url} />
                    
            </div>
        );
    }


}




export default People;