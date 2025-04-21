
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import SignUpModal from './SignUpModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-cinema-dark to-transparent py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white mr-8">
            <span className="text-primary">Cine</span>Verse
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-white hover:text-primary transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-primary transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-primary transition-colors">My List</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-0 border-none overflow-hidden bg-transparent">
              <SignUpModal />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
