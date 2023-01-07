import React from "react";

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="movie-card-container-one">
        <img className="movie-card-img" src={props.src} alt={props.alt} />
        <div className="movie-card-contener">
          <h3 className="movie-card-title">{props.title}</h3>
          <p className="movie-release-date">{props.date}</p>
          <p className="movie-card-ratings">{props.ratings}</p>
        </div>
      </div>
      <div className="movie-card-container-two">
        <p className="movie-card-description">{props.desc}</p>
      </div>
    </div>
  );
};

export default MovieCard;
