
import React from "react";
import Navbar from "@/components/Navbar";
import MovieGrid from "@/components/MovieGrid";
import { trendingMovies } from "@/data/movies";

// Re-use trendingMovies as fake TV shows for frontend demo
const tvShows = trendingMovies.map((x) => ({
  ...x,
  genre: x.genre === "Sci-Fi" ? "TV Sci-Fi" : "TV " + x.genre,
  title: x.title + " (TV)",
  id: 100 + x.id,
}));

const TVShows = () => (
  <main className="min-h-screen bg-cinema-dark text-white pb-10">
    <Navbar />
    <div className="container mx-auto pt-12">
      <h1 className="text-3xl font-bold mb-4 text-center">TV Shows</h1>
      <p className="text-cinema-text mb-8 text-center">
        Explore popular and trending TV Shows on CineVerse.
      </p>
      <MovieGrid movies={tvShows} />
    </div>
  </main>
);

export default TVShows;
