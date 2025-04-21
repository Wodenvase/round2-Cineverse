
import React, { useState } from 'react'
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

const GenreFilter = () => {
  const [activeGenre, setActiveGenre] = useState('All')

  const handleButtonClick = (genre: string) => {
    console.log(`Genre filter clicked: ${genre}`)
    setActiveGenre(genre)
  }

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
            onClick={() => handleButtonClick(genre)}
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default GenreFilter
