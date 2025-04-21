
import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MovieCarousel from '@/components/MovieCarousel'
import GenreFilter from '@/components/GenreFilter'
import { trendingMovies, popularMovies } from '@/data/movies'
import MovieGrid from '@/components/MovieGrid'
import { Button } from '@/components/ui/button'

const banners = [
  {
    id: 1,
    title: "Explore the Action",
    description: "Dive into the most thrilling action movies.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Browse Action",
  },
  {
    id: 2,
    title: "Romantic Hits",
    description: "Feel the love with top romance films.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Browse Romance",
  }
]

const Index = () => {

  const handleBannerButtonClick = (bannerTitle: string) => {
    console.log(`Banner button clicked: ${bannerTitle}`)
    // In a real app, this could navigate or filter movies by the banner category
  }

  const handleTrialButtonClick = () => {
    console.log("Start Your Free Trial button clicked")
  }

  return (
    <div className="min-h-screen bg-cinema-dark text-white">
      <Navbar />
      <HeroSection />

      {/* New banners/posters section */}
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {banners.map(banner => (
          <div
            key={banner.id}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => handleBannerButtonClick(banner.title)}
            style={{ height: '260px' }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinema-darkpurple/80 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-1">{banner.title}</h3>
              <p className="text-cinema-text mb-4">{banner.description}</p>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white w-max"
                onClick={(e) => {
                  e.stopPropagation()
                  handleBannerButtonClick(banner.title)
                }}
              >
                {banner.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Display trending movie posters in a grid below banners */}
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-white mb-5">Featured Movies</h2>
        <MovieGrid movies={trendingMovies.slice(0, 4)} />
      </div>

      <div className="py-8">
        <GenreFilter />

        <MovieCarousel title="Trending Now" movies={trendingMovies} />

        <MovieCarousel title="Popular on CineVerse" movies={popularMovies} />

        <div className="container mx-auto my-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Watch?</h2>
          <p className="text-cinema-text text-lg max-w-2xl mx-auto mb-6">
            Join CineVerse today and get access to thousands of movies and TV shows. 
            Cancel anytime, no commitment required.
          </p>
          <div className="inline-block">
            <div className="relative animate-pulse-subtle">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cinema-blue rounded-lg blur"></div>
              <button
                className="relative px-8 py-3 bg-cinema-darkpurple rounded-lg text-white font-medium"
                onClick={handleTrialButtonClick}
              >
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
