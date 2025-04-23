
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onSignUpClick?: () => void;
}

const Navbar = ({ onSignUpClick }: NavbarProps) => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "TV Shows", path: "/tvshows" },
    { name: "My List", path: "/mylist" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          CineVerse
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "hover:text-primary transition-colors font-medium",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={onSignUpClick}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
