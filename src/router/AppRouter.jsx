import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';

import BooksContext from '../context/BooksContext';

const AppRouter = () => {

  const [books, setBooks] = useLocalStorage('books', []); //Usando el hook useLocalStorage para obtener los libros en localStorage (si los hay)


  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
