import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <form className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+375 XX XXX-XX-XX"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@mail.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Опишите ваш проект или задайте вопрос"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:+375445404460" className="hover:text-blue-600">+375 44 540-44-60</a>
                    </p>
                    <p className="text-gray-500 text-sm">Станислав</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@remontpro.by" className="hover:text-blue-600">info@remontpro.by</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Время работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Мы работаем по Могилеву</h4>
                <p className="text-gray-600 mb-4">Выезжаем на объект для консультации и оценки работ бесплатно в пределах города.</p>
                <a 
                  href="#" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Заказать выезд специалиста
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;