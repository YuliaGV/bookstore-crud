import React from 'react';
import Book from './Book';

import { Alert, Container, Row, Col } from 'react-bootstrap';

const BooksList = ({ books, setBooks }) => {

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
   
      <Container style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Lista de libros</h2>

        <Row>
        { books.length === 0 ? (
          <Alert variant="info">
            No hay libros en la lista
          </Alert>
        ) : (
          books.map((book) => (
            <Col sm={6} md={4} lg={3} key={book.id}>
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
            </Col>
          ))
        )}
        </Row>



        

      </Container>
      
    
  );
};

export default BooksList;


