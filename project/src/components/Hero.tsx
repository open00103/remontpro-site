import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-blue-600 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Качественный ремонт и отделка помещений</h1>
          <p className="text-xl mb-8">Профессиональные услуги по ремонту и отделке квартир, домов и офисов. Работаем быстро, качественно и по доступным ценам.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg text-center transition duration-300"
            >
              Наши услуги
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-medium px-6 py-3 rounded-lg text-center transition duration-300"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;