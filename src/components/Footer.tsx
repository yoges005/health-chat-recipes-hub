
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FOODIE CRAFT</h3>
            <p className="text-gray-300">
              Your food, your way... Craft your perfect meal anytime!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-foodie">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-foodie">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-foodie">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/categories/diabetes" 
                  className="text-gray-300 hover:text-foodie"
                >
                  Diabetes
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/heart-disease" 
                  className="text-gray-300 hover:text-foodie"
                >
                  Heart Disease
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/ulcer" 
                  className="text-gray-300 hover:text-foodie"
                >
                  Ulcer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300 mb-2">contact@foodiecraft.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Foodie Craft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
