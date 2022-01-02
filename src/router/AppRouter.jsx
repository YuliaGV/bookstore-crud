import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';

const AppRouter = () => {

  const [books, setBooks] = useLocalStorage('books', []); //Usando el hook useLocalStorage para obtener los libros en localStorage (si los hay)


  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<BooksList 
              books={books}
              setBooks={setBooks}
            />} />
            <Route path="/add" element={<AddBook 
              books={books}
              setBooks={setBooks}
            />} />
            <Route path="/edit/:id" element={<EditBook
              books={books}
              setBooks={setBooks}
            />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
