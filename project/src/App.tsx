import React from 'react';
import { Phone, Clock, CheckCircle, Mail, Menu, X, Paintbrush, Layers, Ruler, Palette, Grid, Columns, Brush, Home, Wrench, Zap, Monitor, Package } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">РемонтПро</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium hover:text-blue-600 transition">Услуги</a>
            <a href="#about" className="font-medium hover:text-blue-600 transition">О нас</a>
            <a href="#contacts" className="font-medium hover:text-blue-600 transition">Контакты</a>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex items-center mr-6">
              <Phone className="w-5 h-5 text-blue-600 mr-2" />
              <span>+375 44 540-44-60</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Заказать звонок
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="font-medium hover:text-blue-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#about" 
                className="font-medium hover:text-blue-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#contacts" 
                className="font-medium hover:text-blue-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="flex items-center pt-2">
                <Phone className="w-5 h-5 text-blue-600 mr-2" />
                <span>+375 44 540-44-60</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full">
                Заказать звонок
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Качественный ремонт и отделка помещений</h2>
            <p className="text-xl mb-8">Профессиональные услуги по ремонту и отделке квартир, домов и офисов. Работаем быстро, качественно и по доступным ценам.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-lg font-medium">
                Наши услуги
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-800 transition text-lg font-medium">
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Предлагаем полный спектр услуг по ремонту и отделке помещений. Наши специалисты выполнят работы любой сложности качественно и в срок.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Арки, откосы, поклейка обоев",
                icon: <Paintbrush className="w-8 h-8 text-blue-600" />,
                description: "Профессиональное создание арочных конструкций любой сложности, оформление оконных и дверных откосов, а также качественная поклейка обоев различных типов с идеальной стыковкой рисунка.",
                bgImage: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Укладка плитки, ламината, линолеума",
                icon: <Layers className="w-8 h-8 text-blue-600" />,
                description: "Точная и аккуратная укладка напольных покрытий с соблюдением технологии. Работаем с керамической плиткой, керамогранитом, ламинатом, линолеумом и ковролином любой сложности.",
                bgImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Выравнивание стен и потолков",
                icon: <Ruler className="w-8 h-8 text-blue-600" />,
                description: "Профессиональное выравнивание поверхностей с использованием современных материалов и технологий. Создаем идеально ровное основание для дальнейшей отделки.",
                bgImage: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Штукатурка, шпатлевка, покраска",
                icon: <Palette className="w-8 h-8 text-blue-600" />,
                description: "Качественное нанесение штукатурки и шпатлевки для создания идеально гладких поверхностей. Профессиональная покраска с равномерным нанесением и без подтеков.",
                bgImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Многоуровневые потолки из гипсокартона",
                icon: <Grid className="w-8 h-8 text-blue-600" />,
                description: "Создание эксклюзивных многоуровневых потолочных конструкций из гипсокартона любой сложности. Реализуем дизайнерские решения с встроенным освещением.",
                bgImage: "https://images.unsplash.com/photo-1594474694931-5b6e6c8d1353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Дизайнерские перегородки",
                icon: <Columns className="w-8 h-8 text-blue-600" />,
                description: "Изготовление функциональных и эстетичных перегородок для зонирования пространства. Используем гипсокартон, стекло, дерево и другие материалы.",
                bgImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Декоративная штукатурка, жидкие обои",
                icon: <Brush className="w-8 h-8 text-blue-600" />,
                description: "Нанесение декоративных покрытий для создания уникальных текстур и эффектов на стенах. Работаем с венецианской штукатуркой, жидкими обоями и другими декоративными материалами.",
                bgImage: "https://images.unsplash.com/photo-1614587396292-8e4bef5d6e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Ремонт и утепление балконов",
                icon: <Home className="w-8 h-8 text-blue-600" />,
                description: "Комплексный ремонт и утепление балконов и лоджий. Выполняем внутреннюю и внешнюю отделку, устанавливаем остекление, проводим утепление современными материалами.",
                bgImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Сантехнические работы",
                icon: <Wrench className="w-8 h-8 text-blue-600" />,
                description: "Профессиональный монтаж и замена сантехнического оборудования. Установка ванн, душевых кабин, унитазов, раковин, смесителей. Монтаж и ремонт систем водоснабжения и канализации.",
                bgImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Электромонтажные работы",
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                description: "Полный комплекс электромонтажных работ: прокладка новой проводки, замена старой, установка розеток, выключателей, светильников. Монтаж электрощитов и автоматов защиты.",
                bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Натяжные потолки",
                icon: <Monitor className="w-8 h-8 text-blue-600" />,
                description: "Установка качественных натяжных потолков различных типов и фактур. Матовые, глянцевые, сатиновые, тканевые потолки с фотопечатью или без. Многоуровневые конструкции и потолки со светодиодной подсветкой.",
                bgImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Помощь в выборе и доставка материала",
                icon: <Package className="w-8 h-8 text-blue-600" />,
                description: "Профессиональная консультация по выбору отделочных материалов с учетом ваших пожеланий и бюджета. Помощь в подборе оптимальных вариантов и организация доставки всех необходимых материалов прямо на объект.",
                bgImage: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                  <img 
                    src={service.bgImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Мы гарантируем высокое качество работ и индивидуальный подход к каждому клиенту</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Опыт и профессионализм",
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                description: "Наши мастера имеют многолетний опыт работы и регулярно повышают квалификацию"
              },
              {
                title: "Качественные материалы",
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                description: "Используем только проверенные материалы от надежных поставщиков"
              },
              {
                title: "Соблюдение сроков",
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                description: "Выполняем работы в строго оговоренные сроки без задержек"
              },
              {
                title: "Гарантия на работы",
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                description: "Предоставляем гарантию на все выполненные работы"
              },
              {
                title: "Прозрачное ценообразование",
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                description: "Честные цены без скрытых платежей и дополнительных расходов"
              },
              {
                title: "Индивидуальный подход",
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                description: "Учитываем все пожелания клиента и предлагаем оптимальные решения"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О нашей компании</h2>
              <p className="text-gray-600 mb-4">
                Мы — команда профессионалов с многолетним опытом в сфере ремонта и отделки помещений. Наша компания специализируется на выполнении полного спектра ремонтно-отделочных работ любой сложности.
              </p>
              <p className="text-gray-600 mb-4">
                Мы гордимся тем, что за годы работы сформировали команду высококвалифицированных специалистов, которые любят свое дело и выполняют его на высшем уровне. Каждый мастер имеет профильное образование и регулярно повышает свою квалификацию.
              </p>
              <p className="text-gray-600 mb-6">
                Наш подход — это сочетание традиционного мастерства с современными технологиями и материалами. Мы внимательно следим за новинками в сфере ремонта и отделки, чтобы предлагать нашим клиентам наиболее эффективные и долговечные решения.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Выполненных проектов</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-600">Опытные профессионалы</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <p className="text-gray-600">Довольных клиентов</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-600">Лет на рынке</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ремонт квартиры" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Наш процесс работы прозрачен и эффективен</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Консультация",
                description: "Бесплатная консультация и оценка объема работ. Обсуждаем ваши пожелания и предлагаем оптимальные решения."
              },
              {
                number: "2",
                title: "Смета и договор",
                description: "Составляем детальную смету и заключаем договор с четкими сроками и стоимостью работ."
              },
              {
                number: "3",
                title: "Выполнение работ",
                description: "Наши специалисты выполняют все работы согласно технологии и в соответствии с договором."
              },
              {
                number: "4",
                title: "Сдача объекта",
                description: "Финальная проверка качества, уборка и сдача объекта. Предоставляем гарантию на все выполненные работы."
              }
            ].map((step, index) => (
              <div key={index} className="relative p-6 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-gray-600 mb-8">Оставьте заявку, и мы свяжемся с вами для консультации и расчета стоимости ремонта</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-600">+375 44 540-44-60 Станислав</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@remontpro.by</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Время работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <p className="font-bold text-lg mb-2">Мы работаем по всему Могилеву и Могилевской области</p>
                <p className="text-gray-600">
                  Выезжаем на объект для консультации и оценки работ бесплатно в пределах города.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+375 29 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Вид услуги</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="arches">Арки, откосы, поклейка обоев</option>
                    <option value="flooring">Укладка плитки, ламината</option>
                    <option value="leveling">Выравнивание стен и потолков</option>
                    <option value="plastering">Штукатурка, шпатлевка, покраска</option>
                    <option value="ceilings">Многоуровневые потолки</option>
                    <option value="partitions">Дизайнерские перегородки</option>
                    <option value="decorative">Декоративная штукатурка</option>
                    <option value="balconies">Ремонт балконов</option>
                    <option value="plumbing">Сантехнические работы</option>
                    <option value="electrical">Электромонтажные работы</option>
                    <option value="stretch">Натяжные потолки</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите ваш проект"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-medium"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">РемонтПро</h3>
              <p className="text-gray-400 mb-4">Профессиональный ремонт квартир, домов и офисов в Могилеве с гарантией качества</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Арки, откосы, поклейка обоев</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Укладка плитки, ламината</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Выравнивание стен и потолков</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Штукатурка, шпатлевка, покраска</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Электромонтажные работы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Сантехнические работы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-gray-400">+375 44 540-44-60 Станислав</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-gray-400">info@remontpro.by</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-gray-400">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
