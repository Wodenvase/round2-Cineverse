
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import MovieCarousel from '@/components/MovieCarousel';
import GenreFilter from '@/components/GenreFilter';
import SignUpModal from '@/components/SignUpModal';
import { trendingMovies, popularMovies } from '@/data/movies';

const Index = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [activeGenre, setActiveGenre] = useState('All');

  return (
    <div className="min-h-screen bg-cinema-dark">
      <Navbar onSignUpClick={() => setIsSignUpOpen(true)} />
      <VideoHero />
      
      <div className="container mx-auto py-8">
        <GenreFilter activeGenre={activeGenre} onGenreChange={setActiveGenre} />
      </div>

      <MovieCarousel title="Trending Now" movies={trendingMovies} />
      <MovieCarousel title="Popular on CineVerse" movies={popularMovies} />

      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  );
};

export default Index;
