import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Home, PenTool as Tool, Paintbrush, Layers, Wrench, Zap, Truck, Lightbulb } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;