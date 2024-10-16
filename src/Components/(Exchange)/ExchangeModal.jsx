import React, { useState } from 'react';
import Modal from 'react-modal';
const ExchangeModal = ({ isOpen, onRequestClose, userBooks = [], onExchange }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
          <h2>Select a Book for Exchange</h2>
          <ul>
              {userBooks.map((book) => (
                  <li key={book._id}>
                      <input
                          type="radio"
                          value={book._id}
                          checked={selectedBook === book._id}
                          onChange={() => setSelectedBook(book._id)}
                      />
                      {book.title}
                  </li>
              ))}
          </ul>
          <button onClick={() => onExchange(selectedBook)}>Exchange</button>
      </Modal>
  );
};

export default ExchangeModal;
