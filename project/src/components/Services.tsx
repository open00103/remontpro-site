import React from 'react';
import { Paintbrush, Layers, PenTool as Tool, Home, CheckCircle, Wrench, Zap, Truck, Lightbulb } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: "Арки, откосы, поклейка обоев",
    description: "Профессиональное создание арочных конструкций любой сложности, оформление оконных и дверных откосов, а также качественная поклейка обоев различных типов с идеальной стыковкой рисунка.",
    icon: <Home className="h-10 w-10 text-blue-600" />
  },
  {
    id: 2,
    title: "Укладка плитки, ламината, линолеума, ковролина",
    description: "Точная и аккуратная укладка напольных покрытий с соблюдением технологии. Работаем с керамической плиткой, керамогранитом, ламинатом, линолеумом и ковролином любой сложности.",
    icon: <Layers className="h-10 w-10 text-blue-600" />
  },
  {
    id: 3,
    title: "Выравнивание стен и потолков, стяжка пола",
    description: "Профессиональное выравнивание поверхностей с использованием современных материалов и технологий. Создаем идеально ровное основание для дальнейшей отделки.",
    icon: <Tool className="h-10 w-10 text-blue-600" />
  },
  {
    id: 4,
    title: "Штукатурка, шпатлевка, покраска",
    description: "Качественное нанесение штукатурки и шпатлевки для создания идеально гладких поверхностей. Профессиональная покраска с равномерным нанесением и без подтеков.",
    icon: <Paintbrush className="h-10 w-10 text-blue-600" />
  },
  {
    id: 5,
    title: "Многоуровневые потолки из гипсокартона",
    description: "Создание эксклюзивных многоуровневых потолочных конструкций из гипсокартона любой сложности. Реализуем дизайнерские решения с встроенным освещением.",
    icon: <Layers className="h-10 w-10 text-blue-600" />
  },
  {
    id: 6,
    title: "Дизайнерские перегородки",
    description: "Изготовление функциональных и эстетичных перегородок для зонирования пространства. Используем гипсокартон, стекло, дерево и другие материалы.",
    icon: <Home className="h-10 w-10 text-blue-600" />
  },
  {
    id: 7,
    title: "Декоративная штукатурка, жидкие обои",
    description: "Нанесение декоративных покрытий для создания уникальных текстур и эффектов на стенах. Работаем с венецианской штукатуркой, жидкими обоями и другими декоративными материалами.",
    icon: <Paintbrush className="h-10 w-10 text-blue-600" />
  },
  {
    id: 8,
    title: "Ремонт и утепление балконов",
    description: "Комплексный ремонт и утепление балконов и лоджий. Выполняем внутреннюю и внешнюю отделку, устанавливаем остекление, проводим утепление современными материалами.",
    icon: <Home className="h-10 w-10 text-blue-600" />
  },
  {
    id: 9,
    title: "Сантехнические работы",
    description: "Профессиональный монтаж и замена сантехнического оборудования. Установка ванн, душевых кабин, унитазов, раковин, смесителей. Монтаж и ремонт систем водоснабжения и канализации.",
    icon: <Wrench className="h-10 w-10 text-blue-600" />
  },
  {
    id: 10,
    title: "Электромонтажные работы",
    description: "Полный комплекс электромонтажных работ: прокладка новой проводки, замена старой, установка розеток, выключателей, светильников. Монтаж электрощитов и автоматов защиты.",
    icon: <Zap className="h-10 w-10 text-blue-600" />
  },
  {
    id: 11,
    title: "Натяжные потолки",
    description: "Установка качественных натяжных потолков различных типов и фактур. Матовые, глянцевые, сатиновые, тканевые потолки с фотопечатью или без. Многоуровневые конструкции и потолки со светодиодной подсветкой.",
    icon: <Lightbulb className="h-10 w-10 text-blue-600" />
  },
  {
    id: 12,
    title: "Помощь в выборе и доставка материала",
    description: "Профессиональная консультация по выбору отделочных материалов с учетом ваших пожеланий и бюджета. Помощь в подборе оптимальных вариантов и организация доставки всех необходимых материалов прямо на объект.",
    icon: <Truck className="h-10 w-10 text-blue-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Предлагаем полный спектр услуг по ремонту и отделке помещений. Наши специалисты выполнят работы любой сложности качественно и в срок.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Опыт и профессионализм</h4>
                <p className="text-gray-600">Наши мастера имеют многолетний опыт работы и регулярно повышают квалификацию</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Качественные материалы</h4>
                <p className="text-gray-600">Используем только проверенные материалы от надежных поставщиков</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Соблюдение сроков</h4>
                <p className="text-gray-600">Выполняем работы в строго оговоренные сроки без задержек</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Гарантия на работы</h4>
                <p className="text-gray-600">Предоставляем гарантию на все выполненные работы</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Прозрачное ценообразование</h4>
                <p className="text-gray-600">Честные цены без скрытых платежей и дополнительных расходов</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Индивидуальный подход</h4>
                <p className="text-gray-600">Учитываем все пожелания клиента и предлагаем оптимальные решения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;