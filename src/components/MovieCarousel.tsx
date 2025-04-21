
import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Movie {
  id: number
  title: string
  image: string
  year: string
  rating: string
  duration: string
  genre: string
}

interface MovieCarouselProps {
  title: string
  movies: Movie[]
}

const MovieCarousel = ({ title, movies }: MovieCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current: container } = carouselRef
      const scrollAmount = direction === 'left' 
        ? container.scrollLeft - container.offsetWidth * 0.75
        : container.scrollLeft + container.offsetWidth * 0.75
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="my-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <Button 
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cinema-darkpurple/70 border-none hover:bg-cinema-darkpurple text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity -ml-5"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cinema-darkpurple/70 border-none hover:bg-cinema-darkpurple text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity -mr-5"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Movie Cards */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-5 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 snap-start">
                <MovieCard 
                  title={movie.title}
                  image={movie.image}
                  year={movie.year}
                  rating={movie.rating}
                  duration={movie.duration}
                  genre={movie.genre}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCarousel
