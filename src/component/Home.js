import React from 'react';

const Home = () => {
  return (
    <div className="font-sans bg-white text-black">
      {/* Hero Section */}
      <section className="bg-green-200 py-20 text-center relative">
        {/* <img 
          src="https://via.placeholder.com/1200x600" // Add your hero image URL here
          alt="Hero"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        /> */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-black animate__animated animate__fadeIn animate__delay-1s">Welcome to Our Software Company</h1>
          <p className="text-xl mt-4 text-black animate__animated animate__fadeIn animate__delay-2s">
            We specialize in creating innovative software solutions tailored to your business needs.
          </p>
          <button className="bg-green-600 text-white mt-8 py-3 px-6 rounded-md text-lg hover:bg-green-700 animate__animated animate__fadeIn animate__delay-3s">
            Get Started
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-5xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl font-bold text-black">About Us</h2>
          <p className="text-lg mt-4 text-black">
            Our mission is to provide cutting-edge software solutions that help businesses optimize their
            operations and improve efficiency. With years of experience and a team of dedicated developers,
            we create high-quality, scalable software.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-green-100 py-20">
        <div className="max-w-5xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl font-bold text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <img 
                src="https://via.placeholder.com/300x200" // Add your image for the service
                alt="Custom Software"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black">Custom Software Development</h3>
              <p className="text-black mt-4">Tailored solutions to fit your business needs.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <img 
                src="https://via.placeholder.com/300x200" // Add your image for the service
                alt="Mobile App Development"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black">Mobile App Development</h3>
              <p className="text-black mt-4">Creating powerful apps for Android and iOS platforms.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <img 
                src="https://via.placeholder.com/300x200" // Add your image for the service
                alt="Cloud Solutions"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black">Cloud Solutions</h3>
              <p className="text-black mt-4">Reliable and scalable cloud solutions for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-lg mt-4">Have a project in mind? We’d love to hear from you.</p>
          <button className="bg-green-600 text-white mt-8 py-3 px-6 rounded-md text-lg hover:bg-green-700">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-200 py-4 text-center">
        <p className="text-black">© 2024 Your Software Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
