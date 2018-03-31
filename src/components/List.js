import React from 'react';
import Button from './Button';
import './List.css'

function List(props) {
    let {list, img_url, callback, text, styleName} = props;
    
    return (
        list.map(m => {
            return(
                <div className="List_all">
                    <div key={m.id}>
                        <img className="List_img" src={`${img_url}${m.poster_path}`} alt={`${m.title} poster`} />
                        <div clasName="List_right_all">
                            <div className="List_right_top">
                                <p className="List_title">{m.title}</p>
                                <p>Release Date: {m.release_date}</p>
                                <p>Average Rating: {m.vote_average}</p>
                            </div>
                                <p>Synopsis: {m.overview}</p>
                                <Button callback={callback} val={m} text={text} styleName={styleName}/>
                                <Button text="Rate"/>
                            </div>
                    </div>  
                </div>
            )
    }))
}

export default List;