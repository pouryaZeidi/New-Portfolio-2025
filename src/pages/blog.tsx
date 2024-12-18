import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Image Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="/CafeHeroImage.png" 
          alt="Cafe Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white py-6 px-8">
          <h1 className=" text-2xl md:text-4xl font-extrabold text-secondary">Exploring Café & Restaurant Culture in Turkey - Armenia - Iran</h1>
          <p className="text-lg mt-2">Discover how my journey across Turkey and Armenia shaped my understanding of the café industry and technology's role in transforming it.</p>
        </div>
      </div>

      {/* Main Blog Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">My Café Journey </h2>
          <p className="text-lg text-gray-500">From visiting iconic cafés to understanding how technology is reshaping the café experience, here’s a look into my travels and what I learned along the way.</p>
        </div>

        {/* Blog Post 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">A Year-Long Journey in Antalya & Istanbul</h3>
          <p className="text-lg mb-4">
            During my year-long trip to Turkey, I immersed myself in the café and restaurant culture of two major cities: Antalya and Istanbul. These cities are known for their vibrant tourism and offer a diverse range of culinary experiences. I spent a considerable amount of time visiting cafés, food courts, and food halls, tasting various dishes and drinks, and paying close attention to the quality of service, staff behavior, and the flavors of the food.
          </p>
          <p className="text-lg mb-4">
            What truly fascinated me was the use of technology in the café industry, something that was significantly behind in Iran. During this time, I was also studying frontend development, specifically React and Next.js, which gave me a unique perspective on how technology could enhance customer experiences in cafés and restaurants.
          </p>
        </div>

        {/* Blog Post 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Starbucks & the Power of Café Apps</h3>
          <p className="text-lg mb-4">
            One of the most eye-opening experiences during my travels was using café and restaurant apps, with Starbucks being the most prominent example. Starbucks' app allows customers to order drinks, find nearby locations, and track loyalty points, all while offering a seamless user experience. The app is used by millions of people globally, making it an integral part of their customer service.
          </p>
          <p className="text-lg mb-4">
            Starbucks has truly set the standard for how technology can be integrated into the café industry, and this made me realize how much room for improvement exists in Iran’s café scene. Their app isn’t just about convenience—it’s about creating a personalized and efficient customer experience that enhances brand loyalty.
          </p>
        </div>

        {/* Blog Post 3 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Building My Own Café App: Poonez</h3>
          <p className="text-lg mb-4">
            Inspired by my experiences with these café apps and the valuable lessons I learned during my frontend development studies, I decided to create my own app. Working with fellow Iranian developers, we’ve been developing an innovative café app that brings the best features of international café apps to Iran. The app will offer advanced features like ordering, loyalty programs, personalized recommendations, and seamless payment systems.
          </p>
          <p className="text-lg mb-4">
            But this is just the beginning. Alongside the app, I am working on creating a café brand named "Poonez," which will operate in a way similar to Starbucks but with a unique twist that differentiates it from other establishments in the market. The goal is to create a café experience that combines high-quality service, a modern approach to technology, and a distinctive brand story.
          </p>
        </div>

        {/* Blog Post 4 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">The Vision for Poonez</h3>
          <p className="text-lg mb-4">
            The vision for Poonez is grand. I’m working towards building a network of cafés across Iran, inspired by the success stories of global chains like Starbucks, but tailored to the local market. With the app and a well-thought-out brand strategy, we aim to create a café experience that feels personal, high-tech, and connected to the community.
          </p>
          <p className="text-lg mb-4">
            Eventually, the plan is to expand Poonez beyond Iran and reach neighboring countries and even Europe. The journey ahead is challenging, but with a solid foundation and a clear vision, I believe that Poonez can become a global brand with a unique story to tell.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">Thanks for following my journey! Stay tuned for more updates on the development of Poonez and the café industry.</p>
          <a href="mailto:zeidipourya@gmail.com" className="text-blue-400 font-semibold hover:underline">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
