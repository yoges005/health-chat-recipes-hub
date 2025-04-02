
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-black text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold flex items-center">
            FOODIE CRAFT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-foodie ${isActive("/") ? "text-foodie" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className={`hover:text-foodie ${
                isActive("/categories") ? "text-foodie" : ""
              }`}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className={`hover:text-foodie ${isActive("/about") ? "text-foodie" : ""}`}
            >
              About
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className={`hover:text-foodie ${
                  isActive("/admin") ? "text-foodie" : ""
                }`}
              >
                Admin
              </Link>
            )}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/favorites" className="hover:text-foodie">
                  <Heart size={20} />
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">
                    Hello, {user?.name.split(" ")[0]}
                  </span>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    className="text-white hover:text-foodie"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex space-x-2">
                <Link to="/signin">
                  <Button variant="ghost" className="text-white hover:text-foodie">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-foodie hover:bg-foodie-hover">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block hover:text-foodie"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="block hover:text-foodie"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block hover:text-foodie"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="block hover:text-foodie"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {isAuthenticated ? (
              <>
                <Link
                  to="/favorites"
                  className="block hover:text-foodie"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Favorites
                </Link>
                <div className="pt-2 border-t border-gray-700">
                  <span className="block text-sm pb-2">
                    Hello, {user?.name.split(" ")[0]}
                  </span>
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="text-white hover:text-foodie px-0"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <div className="pt-2 border-t border-gray-700 flex flex-col space-y-2">
                <Link
                  to="/signin"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="text-white hover:text-foodie w-full"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link
                  to="/signup"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="bg-foodie hover:bg-foodie-hover w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
