import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-6 flex flex-col justify-end">
      <div className="max-w-6xl mx-auto text-center flex-grow">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social media links or icons */}
          <a href="https://facebook.com" className="text-white hover:text-gray-500" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className="text-white hover:text-gray-500" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="text-white">
          &copy; 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
