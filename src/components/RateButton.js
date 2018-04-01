import React, {Component} from 'react';

class RateButton extends Component{
    constructor() {
        super();
        this.state = {
            score: 0,
            hasRated: false
        }
    }

    updateRating(val) {
        let { vote_average, vote_count } = this.props.movie;
        let currentScore = vote_average * vote_count;
        vote_count++;
        let newAverage = Math.round(((currentScore + +val) / vote_count) * 10) / 10;        
        console.log(newAverage)
        if (!this.state.hasRated) {
            this.setState({ hasRated: true })
        } else {
            alert("You've already rated this film");
        }
        this.props.updateRatingAll(this.props.movie.id, newAverage)
    }
    
    render() {
        let { showModal, toggleModal, movie, updateRatingAll } = this.props;

        return (
            <div>
                    <button 
                    className="button is-warning" 
                    value="1" 
                    onClick={(e) => {
                        this.updateRating(e.target.value);}}>1</button>
                    
                    <button 
                    className="button is-warning" 
                    value="2" 
                    onClick={(e) => {
                        this.updateRating(e.target.value); 
                        updateRatingAll(movie.id, this.state.new_average)}}>2</button>
                    
                    <button 
                    className="button is-warning" 
                    value="3" 
                    onClick={(e) => {
                        this.updateRating(e.target.value);}}>3</button>

                    <button 
                    className="button is-warning" 
                    value="4" 
                    onClick={(e) => {
                        this.updateRating(e.target.value)}}>4</button>

                    <button 
                    className="button is-warning" 
                    value="5" 
                    onClick={(e) => {
                        this.updateRating(e.target.value)}}>5</button>

                    <button 
                    className="button is-warning" 
                    value="6" 
                    onClick={(e) => {
                        this.updateRating(e.target.value)}}>6</button>

                    <button 
                    className="button is-warning" 
                    value="7" 
                    onClick={(e) => {
                        this.updateRating(e.target.value)}}>7</button>

                    <button 
                    className="button is-warning" 
                    value="8" onClick={(e) => {
                        this.updateRating(e.target.value)}}>8</button>

                    <button 
                    className="button is-warning" 
                    value="9" 
                    onClick={(e) => {
                        this.updateRating(e.target.value)}}>9</button>

                    <button 
                    className="button is-warning" 
                    value="10" 
                    onClick={(e) => {
                        this.updateRating(e.target.value)}}>10</button>
            </div>
        );
    }
}

export default RateButton;