import React from 'react';

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? 
                        <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Sem Imagem" style={{width: "100%", height: 360 }} /> : 
                        <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="Imagem" style={{width: "100%", height: 360 }}  />        
                    }
                </div>
                <span className="card-title">{props.title}</span>
                    <div className="card-content">
                        <div className="card-action">
                            <p>
                                <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
                                    Veja mais detalhes
                                </a>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Movie;