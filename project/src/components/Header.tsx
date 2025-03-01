import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">РемонтПро</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Услуги</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">О нас</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
        </nav>
        
        <div className="hidden md:flex items-center">
          <Phone className="h-5 w-5 text-blue-600 mr-2" />
          <a href="tel:+375445404460" className="text-blue-600 font-medium">+375 44 540-44-60</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg">
          <nav className="flex flex-col space-y-3 pb-3">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <div className="flex items-center py-2">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <a href="tel:+375445404460" className="text-blue-600 font-medium">+375 44 540-44-60</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;