
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SignUpModal from "./SignUpModal";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Movies", to: "/movies" },
  { label: "TV Shows", to: "/tvshows" },
  { label: "My List", to: "/mylist" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleSignInClick = () => {
    console.log("Sign In button clicked");
    setIsOpen(true);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-cinema-dark to-transparent py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="focus:outline-none">
            <h1 className="text-2xl font-bold text-white mr-8">
              <span className="text-primary">Cine</span>Verse
            </h1>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((nav) => (
              <Link
                key={nav.label}
                to={nav.to}
                className={`text-white hover:text-primary transition-colors focus:outline-none ${
                  location.pathname === nav.to
                    ? "font-semibold text-primary"
                    : ""
                }`}
                tabIndex={0}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={handleSignInClick}
              >
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
  );
};

export default Navbar;
