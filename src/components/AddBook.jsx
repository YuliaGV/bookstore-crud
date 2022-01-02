import React from 'react';
import BookForm from './BookForm';

const AddBook = ({setBooks, books}) => {

  const AddNewBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <>
      <BookForm AddFunction={AddNewBook} editando={false} />
    </>
  );
};

export default AddBook;