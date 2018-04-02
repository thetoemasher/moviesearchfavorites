import React from 'react';

function List(props) {
    let { list, img_url } = props;
    
    return (
        list.map(s => {
            return(
                    <div className="box level is-danger" key={s.id}>
                        <img className="level-left" src={`${img_url}${s.poster_path}`} alt={`${s.name} poster`} />
                        <div>

                            <p className="level-item title">{s.name}</p>
                        <div className="level">
                            <p className="level-item">First Aired: {s.first_air_date}</p>
                            <p className="level-item">Average Rating: {s.vote_average}</p>
                        </div>
                            <p className="level-item box">Synopsis: {s.overview}</p>
                        </div>
                    </div>  
            )
    }))
}

export default List;