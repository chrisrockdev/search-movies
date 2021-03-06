import React from 'react';
import Movie from '../movie/Movie';

const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => (
                            <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} title={movie.title} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;