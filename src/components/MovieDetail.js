import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.css';

function MovieDetail({ id, title, year, rating, runtime, genres, description_full, language, mpa_rating, background_image, torrents }) {
    return (
        <div className="movieDetail">           
            <img src={background_image} alt={title} title={title} />
            <div className="movieDetail_data">
                <h3 className="movieDetail__title">
                    title 
                    <br />
                    {title}
                </h3>
                <h5 className="movieDetail__year">year <br /> {year}</h5>
                <h5 className="movieDetail__rating">rating <br /> {rating}</h5>
                <h5 className="movieDetail__runtime">runtime <br /> {runtime}</h5>
                <ul className="movieDetail__genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className="movieDetail__genre">
                                {genre}
                            </li>
                        );
                    })}
                </ul>       
                <h5 className="movieDetail__description_full">description <br /> {description_full}</h5>
                <h5 className="movieDetail__language">language <br /> {language}</h5>
                <h5 className="movieDetail__mpa_rating">mpa_rating <br /> {mpa_rating}</h5>
                <ul className="movieDetail__torrents">torrent <br /> 
                    {torrents.map((torrent, index) => {
                        return (
                            <div key={index}>
                                <li className="movieDetail__genre">
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