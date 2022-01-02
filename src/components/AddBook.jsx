import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';
import BookForm from './BookForm';

const AddBook = () => {

  const { books, setBooks } = useContext(BooksContext);

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