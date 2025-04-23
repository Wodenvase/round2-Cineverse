
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import MovieCarousel from '@/components/MovieCarousel';
import GenreFilter from '@/components/GenreFilter';
import SignUpModal from '@/components/SignUpModal';
import AboutUs from '@/components/AboutUs';
import { trendingMovies, popularMovies, actionMovies, romanceMovies } from '@/data/movies';

const Index = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [activeGenre, setActiveGenre] = useState('All');

  const filterMoviesByGenre = (movies: typeof trendingMovies) => {
    if (activeGenre === 'All') return movies;
    return movies.filter(movie => movie.genre === activeGenre);
  };

  return (
    <div className="min-h-screen bg-cinema-dark">
      <Navbar onSignUpClick={() => setIsSignUpOpen(true)} />
      <VideoHero />
      
      <div className="container mx-auto py-8">
        <GenreFilter activeGenre={activeGenre} onGenreChange={setActiveGenre} />
      </div>

      <MovieCarousel title="Trending Now" movies={filterMoviesByGenre(trendingMovies)} />
      <MovieCarousel title="Popular on CineVerse" movies={filterMoviesByGenre(popularMovies)} />
      <MovieCarousel title="Action & Adventure" movies={filterMoviesByGenre(actionMovies)} />
      <MovieCarousel title="Romance & Drama" movies={filterMoviesByGenre(romanceMovies)} />
      <MovieCarousel title="Oscar Winners" movies={filterMoviesByGenre(trendingMovies.slice(0, 3))} />
      <MovieCarousel title="New Releases" movies={filterMoviesByGenre(popularMovies.slice(2, 5))} />
      <MovieCarousel title="Critically Acclaimed" movies={filterMoviesByGenre(trendingMovies.slice(3))} />
      <MovieCarousel title="Must Watch" movies={filterMoviesByGenre(popularMovies.slice(0, 4))} />
      
      <AboutUs />

      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  );
};

export default Index;
