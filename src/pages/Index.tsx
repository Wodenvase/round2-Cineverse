
import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MovieCarousel from '@/components/MovieCarousel'
import GenreFilter from '@/components/GenreFilter'
import { trendingMovies, popularMovies } from '@/data/movies'

const Index = () => {
  return (
    <div className="min-h-screen bg-cinema-dark text-white">
      <Navbar />
      <HeroSection />
      
      <div className="py-8">
        <GenreFilter />
        
        <MovieCarousel 
          title="Trending Now" 
          movies={trendingMovies}
        />
        
        <MovieCarousel 
          title="Popular on CineVerse" 
          movies={popularMovies}
        />
        
        <div className="container mx-auto my-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Watch?</h2>
          <p className="text-cinema-text text-lg max-w-2xl mx-auto mb-6">
            Join CineVerse today and get access to thousands of movies and TV shows. 
            Cancel anytime, no commitment required.
          </p>
          <div className="inline-block">
            <div className="relative animate-pulse-subtle">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cinema-blue rounded-lg blur"></div>
              <button className="relative px-8 py-3 bg-cinema-darkpurple rounded-lg text-white font-medium">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-cinema-darkpurple py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">
                <span className="text-primary">Cine</span>Verse
              </h1>
              <p className="text-cinema-text mt-2">All your entertainment needs in one place.</p>
            </div>
            
            <div className="flex gap-8">
              <div>
                <h3 className="font-semibold mb-2">Company</h3>
                <ul className="space-y-1 text-cinema-text">
                  <li><a href="#" className="hover:text-primary">About Us</a></li>
                  <li><a href="#" className="hover:text-primary">Careers</a></li>
                  <li><a href="#" className="hover:text-primary">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <ul className="space-y-1 text-cinema-text">
                  <li><a href="#" className="hover:text-primary">FAQ</a></li>
                  <li><a href="#" className="hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cinema-text/20 text-center text-cinema-text text-sm">
            <p>© 2023 CineVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
