import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Команда специалистов за работой" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">10+ лет</p>
                <p>опыта работы</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашей компании</h2>
            <p className="text-gray-600 mb-4">
              Мы — команда профессионалов с многолетним опытом в сфере ремонта и отделки помещений. Наша компания специализируется на выполнении полного спектра ремонтно-отделочных работ любой сложности.
            </p>
            <p className="text-gray-600 mb-4">
              Мы гордимся тем, что за годы работы сформировали команду высококвалифицированных специалистов, которые любят свое дело и выполняют его на высшем уровне. Каждый мастер имеет профильное образование и регулярно повышает свою квалификацию.
            </p>
            <p className="text-gray-600 mb-6">
              Наш подход — это сочетание традиционного мастерства с современными технологиями и материалами. Мы внимательно следим за новинками в сфере ремонта и отделки, чтобы предлагать нашим клиентам наиболее эффективные и долговечные решения.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Выполненных проектов</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-gray-600">Опытные профессионалы</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-gray-600">Лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Как мы работаем</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <h4 className="font-semibold text-lg mb-3">Консультация</h4>
              <p className="text-gray-600">Бесплатная консультация и оценка объема работ. Обсуждаем ваши пожелания и предлагаем оптимальные решения.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <h4 className="font-semibold text-lg mb-3">Смета и договор</h4>
              <p className="text-gray-600">Составляем детальную смету и заключаем договор с четкими сроками и стоимостью работ.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <h4 className="font-semibold text-lg mb-3">Выполнение работ</h4>
              <p className="text-gray-600">Наши специалисты выполняют все работы согласно технологии и в соответствии с договором.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <h4 className="font-semibold text-lg mb-3">Сдача объекта</h4>
              <p className="text-gray-600">Финальная проверка качества, уборка и сдача объекта. Предоставляем гарантию на все выполненные работы.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;