import React from 'react';
import Button from './Button';
// import './List.css'

function List(props) {
    let {list, img_url, callback, text, styleName} = props;
    
    return (
        list.map(m => {
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
                                <Button callback={callback} val={m} text={text} styleName={`level-item ${styleName}`}/>
                                <Button text="Rate" styleName="is-warning level-item"/>
                            </div>
                        </div>
                    </div>  
            )
    }))
}

export default List;