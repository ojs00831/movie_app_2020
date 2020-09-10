import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.css';

function MovieDetail({ id, title, year, rating, runtime, genres, description_full, language, mpa_rating, background_image, torrents }) {
    return (
        <div className="movie">           
            <img src={background_image} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie__title">
                    {title}
                </h3>
                <h5 className="movie__year">{year}</h5>
                <h5 className="movie__rating">{rating}</h5>
                <h5 className="movie__runtime">{runtime}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className="movie__genre">
                                {genre}
                            </li>
                        );
                    })}
                </ul>       
                <h5 className="movie__description_full">{description_full}</h5>
                <h5 className="movie__language">{language}</h5>
                <h5 className="movie__mpa_rating">{mpa_rating}</h5>
                <ul className="movie__torrents">
                    {torrents.map((torrent, index) => {
                        return (
                            <div key={index}>
                                <li className="movie__genre">
                                    {torrent.url}
                                </li>
                                <li>
                                    {torrent.quality}
                                </li>
                                <li>
                                    {torrent.seeds}
                                </li>
                                <li>
                                    {torrent.size}
                                </li>
                            </div>
                        );                        
                    })}
                </ul>   
            </div>         
        </div>
        
    );
}

MovieDetail.propTypes = { 
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,        
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description_full: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    mpa_rating: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,    
    torrents: PropTypes.array.isRequired,

};

export default MovieDetail;