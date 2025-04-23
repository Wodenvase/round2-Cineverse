
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

const VideoHero = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-darkpurple via-cinema-darkpurple/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Your Universe of Cinema
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Dive into endless entertainment with premium movies and TV shows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              <Play className="mr-2 h-4 w-4" /> Start Watching
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Browse Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
