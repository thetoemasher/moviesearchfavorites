import React, {Component} from 'react';

class RateButton extends Component{
    constructor() {
        super();
        this.state = {
            score: 0,
            new_average: 0,
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
            this.setState({ new_average: newAverage, hasRated: true })
        } else {
            alert("You've already rated this film");
        }
        console.log(this.state.new_average)
    }
    
    render() {
        let { showModal, toggleModal, movie, updateRatingAll } = this.props;
        // let visible = ''
        // if (showModal) {
        //     visible = 'is-active';
        // }
        
        return (
            <div className={``}>
                <div className="">
                    <button className="button" value="1" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>1</button>
                    <button className="button" value="2" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>2</button>
                    <button className="button" value="3" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>3</button>
                    <button className="button" value="4" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>4</button>
                    <button className="button" value="5" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>5</button>
                    <button className="button" value="6" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>6</button>
                    <button className="button" value="7" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>7</button>
                    <button className="button" value="8" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>8</button>
                    <button className="button" value="9" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>9</button>
                    <button className="button" value="10" onClick={(e) => {this.updateRating(e.target.value); updateRatingAll(movie.id, this.state.new_average)}}>10</button>
                </div>
                {/* <button className="modal-close is-large" aria-label="close" onClick={() => toggleModal()}></button> */}
            </div>
        );
    }
}

export default RateButton;