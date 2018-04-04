import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import RateButton from './RateButton';

function List(props) {
    let { list, img_url, callback, text, styleName, updateRatingAll, findSimilar } = props;
    
    return (
        list.map(m => {
            return(
                    <div className="box level is-danger" key={m.id}>
                        <img className="level-left" src={`${img_url}${m.poster_path}`} alt={`${m.title} poster`} />
                        <div className="List-Right">

                            <p className="level-item title">{m.title}</p>
                        <div className="level">
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
                            
                                <Link to='/'><Button
                                    callback={ findSimilar }
                                    val={m.id}
                                    text="Find Similar"
                                    styleName="is-success level-item " /></Link>
                            
                                <RateButton 
                                    movie={m}
                                    updateRatingAll={updateRatingAll} />
                            
                            </div>
                        </div>
                    </div>  
            )
    }))
}

export default List;