import React from 'react';
import Button from './Button';
import RateButton from './RateButton'
// import './List.css'

function List(props) {
    let { list, img_url, callback, text, styleName, toggleModal, showModal, updateRatingAll } = props;
    
    return (
        list.map(m => {
            let average = m.vote_average;
            return(
                    <div className="box level" key={m.id}>
                        <img className="level-left" src={`${img_url}${m.poster_path}`} alt={`${m.title} poster`} />
                        <div>

                            <p className="List_title level-item title">{m.title}</p>
                        <div className="List_right_top level">
                            <p className="level-item">Release Date: {m.release_date}</p>
                            <p className="level-item">Average Rating: {m.vote_average}</p>
                        </div>
                            <p className="level-item box">Synopsis: {m.overview}</p>
                            <div className="level">
                                <Button 
                                callback={callback} 
                                val={m} 
                                text={text} 
                                styleName={`level-item ${styleName}`} />
                                {/* <Button 
                                callback={toggleModal} 
                                text="Rate" 
                                styleName="is-warning level-item" /> */}
                                <RateButton 
                                showModal={showModal} 
                                toggleModal={toggleModal} 
                                movie={m}
                                updateRatingAll={updateRatingAll} />
                            </div>
                        </div>
                    </div>  
            )
    }))
}

export default List;