import React from 'react';

function List(props) {
    let { list, img_url } = props;

    
    return (
        list.map(p => {
            let films = p.known_for.map(movie => {
                return (
                    <div className="box level" key={movie.id}>
                        <img className="level-left known_for" src={`${img_url}${movie.poster_path}`} alt={`${movie.title} poster`} />
                        <div>
                            <p className="level-item title is-6">{movie.title}</p>
                        <div className="level">
                            <p className="level-item">Release Date: {movie.release_date}</p>
                        </div>
                        <div className="level">
                            <p className="level-item">Average Rating: {movie.vote_average}</p>
                        </div>
                        </div>
                    </div>  
                );
            })
            return(
                    <div className="box level is-danger" key={p.id}>
                        <img className="level-left" src={`${img_url}${p.profile_path}`} alt={`${p.name} poster`} />
                        <div>
                            <p className="level-item title">{p.name}</p>
                            <p className="level-item subtitle">Known For</p>
                        <div className="level">
                            {films}
                        </div>
                        </div>
                    </div>  
            )
    }))
}

export default List;