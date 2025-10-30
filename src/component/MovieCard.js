import './MovieCard.css'
function MovieCard({ title, year, posterUrl, shortPlot, rating }) {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">
          {title} <span className="movie-year">({year})</span>
        </h3>
        <p className="movie-plot">{shortPlot}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
