// Sure! Below is the same FAQ component but using Tailwind CSS for styling instead of raw CSS.

// ### JSX Component (FAQ.js) with Tailwind CSS

// jsx
import React from 'react';

const FAQs = [
  {
    title: 'How To Add A Booking Source',
    content: 'A Booking Source allows you to track which source provided the reservation. This data can be used to identify which sources are the best-performing ones for your hotel. An essential hotel software feature.',
  },
  {
    title: 'Rate Plan Settings',
    content: 'Rate plans must be setup in order to setup Online Booking Engine, or connection to OTA’s (e.g., Booking.com). Also, with the rate plans setup, you won’t have to train your staff to remember/look up prices of the rooms.',
  },
  {
    title: 'How To Move Rooms For Checked In Guests',
    content: 'Room Move for Inhouse Guests. Sometimes you have to move guests for a reason. This could be for operational issues or the guest may have asked for an upgrade to another room. To setup a room move for a Checked In guest, open the reservation, select the room type and room number they would be moving to and click save.',
  },
  {
    title: 'How To Make Reservations For An Existing Group',
    content: 'Once you have found the group you are looking to make the reservation for, using the Group Search function or if you see the group on the dashboard screen just click on any reservation. A straightforward feature in our hotel management software.',
  },
  {
    title: 'How To Add Another Property To Your Account',
    content: 'If you have more than one property to manage (e.g., you are an owner of two hotels, or of a hotel chain), you can simply add an extra property by clicking on your email address on the top-right corner of the screen. Roomsy hotel PMS makes this simple.',
  },
  {
    title: 'How To Create A Group Booking',
    content: 'If you get a lot of travellers coming to your hotel as a group then we recommend using the Group functionality.',
  },
  {
    title: 'Setting Up Your Website',
    content: '1. First, go to [Settings] > [Company] > [General Information] and ensure that all company information is filled in accurately as it will be displayed on your website. Roomsy is a hotel PMS with a website for you.',
  },
];

const FAQ = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-left">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <p className="mt-2 text-gray-700">Here are some of the Roomsy frequently asked questions.</p>
      <div className="mt-6 space-y-6">
        {FAQs.map((faq, index) => (
          <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg" key={index}>
            <h3 className="text-xl font-semibold text-gray-800">{faq.title}</h3>
            <p className="mt-2 text-gray-600">{faq.content}</p>
            <a href="#" className="mt-3 inline-block text-blue-600 font-bold hover:underline">READ MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
