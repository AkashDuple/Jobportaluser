import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center">
    <div className="container mx-auto">
      <ul className="flex justify-center space-x-4">
        <li><a href="#" className='font-semibold text-sm'>Jobs</a></li>
        <li><a href="#" className='font-semibold text-sm'>Terms of Service</a></li>
        <li><a href="#" className='font-semibold text-sm'>Privacy Policy</a></li>
        <li><a href="#" className='font-semibold text-sm'>Contact Us</a></li>
      </ul>
      <p className="mt-4 text-sm text-gray-500 border-t border-gray-400">&copy; 2024 Copyright Jobboard</p>
    </div>
  </footer>
  );
};

export default Footer;
