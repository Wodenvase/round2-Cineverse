
import React from 'react'
import { Button } from './ui/button'
import { Play, Share, Info, Heart } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

interface MovieCardProps {
  title: string
  image: string
  year: string
  rating: string
  duration: string
  genre: string
}

const MovieCard = ({ title, image, year, rating, duration, genre }: MovieCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className="relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          style={{ height: '360px', width: '240px' }}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-cinema-darkpurple border-cinema-text/20">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <span>{year}</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span>{rating}</span>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <span>{duration}</span>
            </div>
            <p className="text-white/70 text-xs">{genre}</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
            >
              <Play className="mr-2 h-3 w-3" /> Watch Now
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-cinema-text/30 text-cinema-text hover:text-white hover:border-white"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-cinema-text/30 text-cinema-text hover:text-white hover:border-white"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-cinema-text/30 text-cinema-text hover:text-white hover:border-white"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default MovieCard
