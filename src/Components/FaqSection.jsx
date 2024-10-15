'use client';

import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'How can I track my book order?',
      answer: 'Once your order is confirmed, you will receive an email with a tracking link. Use this link to monitor your delivery status.',
    },
    {
      question: 'Do you offer international shipping for books?',
      answer: 'Yes, we offer international shipping options. Shipping costs will vary depending on your location.',
    },
    {
      question: 'How long does the delivery take?',
      answer: 'Delivery typically takes 3-7 business days for local orders, and 10-14 business days for international orders.',
    },
    {
      question: 'Can I return or exchange books?',
      answer: 'Yes, you can return or exchange books within 14 days of delivery, as long as the book is in its original condition.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Bookify gift cards as payment methods.',
    },
    {
      question: 'How do I cancel my book order?',
      answer: 'To cancel your order, please contact our customer support within 24 hours of placing the order. Once the order is processed, cancellation may not be possible.',
    },
    {
      question: 'What should I do if I receive a damaged book?',
      answer: 'If you receive a damaged book, contact our customer support team within 7 days of receiving your order. We will assist you in arranging a replacement or refund.',
    },
  ];

  return (
    <div className=" flex mt-8  flex-col lg:flex-row justify-between items-center px-8  space-y-8 lg:space-y-0 rounded-lg lg:px-28 pb-6  mx-auto">

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://i.postimg.cc/Lshjjt8d/Book-FAQ.png"
          alt="Glasses and Book"
          className="object-cover w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto"
        />
      </div>

      {/* FAQ Section */}
      <div className="bg-white text-black p-12 rounded-lg w-full lg:w-1/2 mb-10 space-y-6">
        <h1 className='text-2xl font-semibold mb-2'>
          People also ask-
        </h1>
        {/* FAQ Accordion mapping */}
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2 border-b ">
            <div
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer text-base sm:text-lg md:text-xl font-semibold flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 text-black text-sm">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default FaqSection;
