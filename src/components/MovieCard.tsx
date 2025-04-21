
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'

interface MovieCardProps {
  title: string
  image: string
  year: string
  rating: string
  duration: string
  genre: string
}

const MovieCard = ({ title, image, year, rating, duration, genre }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      style={{ height: '360px', width: '240px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Hover Overlay with Details */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-cinema-dark to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
          <span>{year}</span>
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          <span>{rating}</span>
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          <span>{duration}</span>
        </div>
        <p className="text-white/70 text-xs mb-3">{genre}</p>
        
        <Button 
          size="sm" 
          className="bg-primary hover:bg-primary/90 text-white w-full animate-fade-in"
        >
          <Play className="mr-2 h-3 w-3" /> Watch Now
        </Button>
      </div>
    </div>
  )
}

export default MovieCard
