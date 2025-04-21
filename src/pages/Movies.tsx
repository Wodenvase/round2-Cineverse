
import React from "react";
import Navbar from "@/components/Navbar";
import MovieGrid from "@/components/MovieGrid";
import { trendingMovies, popularMovies } from "@/data/movies";

const allMovies = [...trendingMovies, ...popularMovies];

const Movies = () => (
  <main className="min-h-screen bg-cinema-dark text-white pb-10">
    <Navbar />
    <div className="container mx-auto pt-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Movies</h1>
      <p className="text-cinema-text mb-8 text-center">
        Browse and enjoy trending and classic movies only on CineVerse.
      </p>
      <MovieGrid movies={allMovies} />
    </div>
  </main>
);

export default Movies;
