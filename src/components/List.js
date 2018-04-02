import React from 'react';
import Button from './Button';
import RateButton from './RateButton'

function List(props) {
    let { list, img_url, callback, text, styleName, updateRatingAll, findSimilar } = props;
    
    return (
        list.map(m => {
            return(
                    <div className="box level is-danger" key={m.id}>
                        <img className="level-left" src={`${img_url}${m.poster_path}`} alt={`${m.title} poster`} />
                        <div className="">

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
                            
                                <Button
                                    callback={ findSimilar }
                                    val={m.id}
                                    text="Find Similar"
                                    styleName="is-link level-item" />
                            
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