import MovieCard from "./MovieCard";
import movies from "../data/Movie";
import "./MovieList.css";
import { useState } from "react";

function MovieList({ searchTerm }) {
  const [select, setSelect] = useState(null); // همون state که داشتی، فقط استفاده‌اش بهتر شده

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clickhandler = (movie) => {
    setSelect(movie); // وقتی روی فیلم کلیک شد، اون فیلم انتخاب بشه
  };

  const closeModal = () => {
    setSelect(null); // برای بستن مودال
  };

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <div key={movie.id} onClick={() => clickhandler(movie)}>
          <MovieCard {...movie} />
        </div>
      ))}

      
      {select && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={select.posterUrl}
              alt={select.title}
              className="modal-poster"
            />
            <h2>{select.title} ({select.year})</h2>
            <p>{select.shortPlot}</p>
            <p><strong>Rating:</strong> {select.rating}</p>
            <a href={select.downloadUrl} className="download-btn">📥 دانلود فیلم</a>
            <button className="close-btn" onClick={closeModal}>بستن ❌</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
