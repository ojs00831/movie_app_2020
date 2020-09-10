import React from 'react';
import axios from 'axios';
import MovieDetail from '../components/MovieDetail';
import './Detail.css';

class Detail extends React.Component {
    state = {        
        isLoading : true,
        movie : {},
      };

      getMovie = async () => {
        const {
          data : {
            data: { movie },
          },
        } = await axios.get('https://yts-proxy.now.sh/movie_details.json?movie_id=10');    
        this.setState({ isLoading: false, movie });
      }

    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
        this.getMovie();
    }

    render() {
        const { location } = this.props;        
        const { isLoading, movie } = this.state;
        
        if (location.state) {
            return (
                <section className="container">
                  { isLoading 
                    ? (
                        <div className="loader">
                          <span className="loader__text">Loading.... </span>
                        </div>
                      )
                    : (
                        <div className="movie">                          
                            <MovieDetail 
                                id = {movie.id}
                                key={movie.id}
                                year = {movie.year}
                                title = {movie.title}                                                                
                                rating = {movie.rating}
                                runtime = {movie.runtime}
                                genres = {movie.genres}
                                description_full = {movie.description_full}
                                language = {movie.language}
                                mpa_rating = {movie.mpa_rating}
                                background_image = {movie.large_cover_image}
                                torrents = {movie.torrents}

                            />                                       
                        </div>
                      )}
                </section>
              );
        } else {
            return null;
        }
    }
}

export default Detail;