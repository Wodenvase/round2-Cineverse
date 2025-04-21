
import React from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", 
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/80 to-transparent z-10" />
      
      {/* Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Unlimited Movies, Shows & More
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Watch anywhere. Cancel anytime. Premium content at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Play className="mr-2 h-4 w-4" /> Watch Free For 30 Days
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Explore Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
