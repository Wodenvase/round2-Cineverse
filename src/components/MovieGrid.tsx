
import React from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  rating: string;
  duration: string;
  genre: string;
  description: string;
  trailer: string;
}

interface MovieGridProps {
  movies: Movie[];
  selectedGenre?: string;
}

const MovieGrid = ({ movies, selectedGenre = "All" }: MovieGridProps) => {
  const filteredMovies = selectedGenre === "All"
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 place-items-center">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
