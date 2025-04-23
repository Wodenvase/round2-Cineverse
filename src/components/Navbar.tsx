
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const location = useLocation();
  const { toast } = useToast();

  const handleExplorePlans = () => {
    toast({
      title: "Subscription Plans",
      description: "Choose from our flexible subscription options.",
    });
  };

  const navLinks = [
    { 
      name: "Home", 
      path: "/",
      dropdown: [] 
    },
    { 
      name: "Movies", 
      path: "/movies",
      dropdown: ["Action", "Romance", "Comedy", "Horror", "Sci-Fi"] 
    },
    { 
      name: "TV Shows", 
      path: "/tvshows",
      dropdown: ["Popular Shows", "New Releases", "Trending Now", "Netflix Originals"] 
    },
    { 
      name: "My List", 
      path: "/mylist",
      dropdown: ["Recently Added", "Watch Later", "Favorites"] 
    },
  ];

  return (
    <nav className="w-full py-4 bg-cinema-darkpurple shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          CineVerse
        </Link>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            link.dropdown.length > 0 ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className={cn(
                  "hover:text-primary transition-colors font-medium px-2 py-1 rounded",
                  location.pathname === link.path
                    ? "text-primary bg-cinema-dark"
                    : "text-white"
                )}>
                  {link.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-cinema-darkpurple border-cinema-text/20">
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      className="text-white hover:text-primary cursor-pointer"
                      onClick={() => {
                        toast({
                          title: item,
                          description: `Showing ${item.toLowerCase()} content`,
                        });
                      }}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "hover:text-primary transition-colors font-medium px-2 py-1 rounded",
                  location.pathname === link.path
                    ? "text-primary bg-cinema-dark"
                    : "text-white"
                )}
              >
                {link.name}
              </Link>
            )
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-1 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                Explore Plans
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-cinema-darkpurple border-cinema-text/20">
              <DropdownMenuItem
                className="text-white hover:text-primary cursor-pointer"
                onClick={() => handleExplorePlans()}
              >
                Basic Plan
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white hover:text-primary cursor-pointer"
                onClick={() => handleExplorePlans()}
              >
                Standard Plan
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white hover:text-primary cursor-pointer"
                onClick={() => handleExplorePlans()}
              >
                Premium Plan
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
