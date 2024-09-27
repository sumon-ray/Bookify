"use client"; 

import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    
    console.log('Email submitted:', email);
    setEmail(''); 
  };

  return (
    <div className="newsletter-section bg-gray-100 py-12 mt-10 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Subscribe to Our Newsletter
        </h2>
        <form
          onSubmit={handleNewsletterSignup}
          className="flex flex-col sm:flex-row items-center justify-center"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="p-2 mb-2 sm:mb-0 sm:mr-2 rounded-md border border-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md "
          >
            Subscribe
          </button>
        </form>
        <p className="text-center mt-2">
        Get updates, tips, and stories about book sharing and building a sustainable reading community. 
        <br/>
        Plus, receive a free guide on how to start your own book exchange!
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;
