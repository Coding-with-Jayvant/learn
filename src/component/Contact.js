import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="font-sans bg-white text-black">
      {/* Hero Section */}
      <section className="bg-green-200 py-20 text-center relative">
        <img
          src="https://via.placeholder.com/1200x600" // Add your hero image URL here
          alt="Contact Us"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-black animate__animated animate__fadeIn animate__delay-1s">
            Contact Us
          </h1>
          <p className="text-xl mt-4 text-black animate__animated animate__fadeIn animate__delay-2s">
            We’d love to hear from you! Reach out to us for any inquiries or feedback.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-black text-center md:text-left">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md border border-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white py-3 px-6 rounded-md text-lg hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Google Map */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="h-72 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.778151474598!2d79.94033827471735!3d6.927079294315642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259cc7b601b57%3A0x9206827d909042a!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1672915012569!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="bg-green-200 py-4 text-center">
        <p className="text-black">123 Software Avenue, Tech City, Country</p>
        <p className="text-black">Phone: +1 234 567 890</p>
        <p className="text-black">Email: info@softwarecompany.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-200 py-4 text-center">
        <p className="text-black">© 2024 Your Software Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
