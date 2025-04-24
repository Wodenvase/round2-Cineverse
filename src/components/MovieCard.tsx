
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Play, Share, Info, Heart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import MoviePreviewDialog from './MoviePreviewDialog';

interface MovieCardProps {
  title: string;
  image: string;
  year: string;
  rating: string;
  duration: string;
  genre: string;
  description: string;
  trailer: string;
}

const MovieCard = ({ 
  title, 
  image, 
  year, 
  rating, 
  duration, 
  genre,
  description,
  trailer 
}: MovieCardProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div 
            className="relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer w-[200px] aspect-[2/3]"
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-sm font-medium text-white line-clamp-1">{title}</h3>
                <div className="flex items-center gap-1 text-xs text-white/80 mt-1">
                  <span>{year}</span>
                  <span>•</span>
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-72 bg-cinema-darkpurple border-cinema-text/20">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="text-xs text-white/70">{genre}</p>
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
                onClick={() => setIsPreviewOpen(true)}
              >
                <Play className="mr-2 h-3 w-3" /> Watch
              </Button>
              <Button 
                size="icon"
                variant="outline" 
                className="h-8 w-8 border-cinema-text/30 text-cinema-text hover:text-white hover:border-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button 
                size="icon"
                variant="outline"
                className="h-8 w-8 border-cinema-text/30 text-cinema-text hover:text-white hover:border-white"
              >
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <MoviePreviewDialog
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        movie={{
          title,
          trailer,
          description
        }}
      />
    </>
  );
};

export default MovieCard;
