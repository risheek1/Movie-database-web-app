import React, { useState, useEffect } from "react";
import RBCarousel from "react-bootstrap-carousel";
import {Link} from "react-router-dom";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from "./api.js";
import ReactStars from "react-rating-stars-component";

function Sign({match}) {
  const params=match.params;
    const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
      console.log(nowPlaying);
      console.log(genres);
      console.log(genres);
      console.log(topRated);
      console.log(topRated);
      console.log(genres);
    }; fetchAPI();
  }, []);
   const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };
 
  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });
  const trendingPersons = persons.slice(0, 4).map((p, i) => {
    return (
      <div className="col-md-3 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto d-block"
          src={p.profileImg}
          alt={p.name}
        ></img>
        <p className="font-weight-bold text-center">{p.name}</p>
        <p
          className="font-weight-light text-center"
          style={{ color: "#5a606b" }}
        >
          Trending for {p.known}
        </p>
      </div>
    );
  });
 const topRatedList = topRated.slice(0, 4).map((item, index) => { return ( <div className="col-md-3" key={index}> <div className="card"> <Link to={`/movie/${item.id}`}><img className="img-fluid" src={item.poster} alt={item.title} ></img></Link>  </div> <div className="mt-3"> <p style={{ fontWeight: "bolder" }}>{item.title}</p> <p>Rated: {item.rating}</p> <ReactStars count={item.rating} size={20} color1={"#f4c10f"} ></ReactStars> </div> </div> ); });
 const movieList = movieByGenre.slice(0, 4).map((item, index) => { return ( <div className="col-md-3 col-sm-6" key={index}> <div className="card"> <Link to={`/movie/${item.id}`}><img className="img-fluid" src={item.poster} alt={item.title} id="card"></img></Link>  </div> <div className="mt-3"> <p style={{ fontWeight: "bolder" }}>{item.title}</p> <p>Rated: {item.rating}</p> <ReactStars count={item.rating} size={20} color1={"#f4c10f"} ></ReactStars> </div> </div> ); });
  return (
    <React.Fragment>
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a href="#" class="navbar-brand">MOVIE</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav">
            <a href="/" class="nav-item nav-link active">Home</a>
            <a href="/watchlist" class="nav-item nav-link">Watchlist</a>
        </div>
        <form class="form-inline">
            <div class="input-group">                    
                <input type="text" class="form-control" placeholder="Search"/>
                <div class="input-group-append">
                    <button type="button" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                </div>
            </div>
        </form>
        <div class="navbar-nav">
          <a class="nav-item nav-link"> {params.user}</a>
        </div>

    </div>
</nav>

     <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>
  <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="fa-arrow"></i>
          </div>
        </div>
      </div>
      <div className="row mt-3">{movieList}</div>
 <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            TRENDING PERSONS ON THIS WEEK
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="fa fa-arrow"></i>
          </div>
        </div>
      </div>
      <div className="row mt-3">{trendingPersons}</div>
      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#5a606b" }}>
            TOP RATED MOVIES
          </p>
        </div>
      </div>
 <div className="row mt-3">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow"></i>
          </div>
        </div>
      </div>
      <div className="row mt-3">{topRatedList}</div>

      <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
    </div>
   
    </React.Fragment>
  );
}
export default Sign;
