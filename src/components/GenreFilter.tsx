
import React from 'react'
import { Button } from './ui/button'

const genres = [
  'All',
  'Action',
  'Comedy',
  'Drama',
  'Romance',
  'Thriller',
  'Horror',
  'Sci-Fi',
  'Fantasy',
  'Documentary'
]

interface GenreFilterProps {
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter = ({ activeGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <div className="container mx-auto my-6">
      <h2 className="text-xl font-semibold text-white mb-4">Browse by Genre</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant={activeGenre === genre ? "default" : "outline"}
            className={`rounded-full ${
              activeGenre === genre
                ? 'bg-primary hover:bg-primary/90 text-white'
                : 'bg-transparent border-cinema-text/30 text-cinema-text hover:text-white hover:border-white'
            }`}
            onClick={() => onGenreChange(genre)}
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default GenreFilter
