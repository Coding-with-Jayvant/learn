import React from 'react';

const About = () => {
  return (
    <div className="font-sans bg-white text-black">
      {/* About Section */}
      <section className="bg-green-200 py-20 text-center relative">
        <img
          src="https://via.placeholder.com/1200x600" // Add your hero image URL here
          alt="About Us"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-black animate__animated animate__fadeIn animate__delay-1s">
            About Us
          </h1>
          <p className="text-xl mt-4 text-black animate__animated animate__fadeIn animate__delay-2s">
            We are a software development company committed to creating innovative solutions that help businesses optimize their operations.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-5xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl font-bold text-black">Our Mission</h2>
          <p className="text-lg mt-4 text-black">
            Our mission is to provide high-quality, scalable software solutions that empower businesses to succeed in a digital world.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-green-100 py-20">
        <div className="max-w-5xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl font-bold text-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/300x200" // Add your team member image
                alt="Team Member"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black">John Doe</h3>
              <p className="text-black mt-4">Lead Developer</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/300x200" // Add your team member image
                alt="Team Member"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black">Jane Smith</h3>
              <p className="text-black mt-4">Project Manager</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/300x200" // Add your team member image
                alt="Team Member"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black">Sara Lee</h3>
              <p className="text-black mt-4">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-200 py-4 text-center">
        <p className="text-black">© 2024 Your Software Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
