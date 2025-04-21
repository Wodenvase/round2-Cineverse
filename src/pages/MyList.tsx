
import React from "react";
import Navbar from "@/components/Navbar";
import MovieGrid from "@/components/MovieGrid";
import { trendingMovies } from "@/data/movies";

// For demo, use trendingMovies as "saved" list
const MyList = () => (
  <main className="min-h-screen bg-cinema-dark text-white pb-10">
    <Navbar />
    <div className="container mx-auto pt-12">
      <h1 className="text-3xl font-bold mb-4 text-center">My List</h1>
      <p className="text-cinema-text mb-8 text-center">
        Your saved movies and TV shows will appear here.
      </p>
      <MovieGrid movies={trendingMovies} />
    </div>
  </main>
);

export default MyList;
