import React, { useState } from 'react';
import { Alert, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const BookForm = ({bookObject, AddFunction, editando}) => {

  const [book, setBook] = useState({
    bookname: bookObject ? bookObject.bookname : '',
    author: bookObject ? bookObject.author : '',
    quantity: bookObject ? bookObject.quantity : '',
    price: bookObject ? bookObject.price : '',
    date: bookObject ? bookObject.date : '',
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, price, quantity } = book;

  const handleSubmit = (e) => {

    e.preventDefault();

    if (bookname === '' || author === '' || price === '' || quantity === '') {
      setErrorMsg('Todos los campos son obligatorios');
    } else {

      //Crea nuevo objeto 

      const newBook = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date().toLocaleDateString()
      };

      //Agrega el nuevo objeto al array de libros
      AddFunction(newBook);

      //Limpia el formulario
      setBook({
        bookname: '',
        author: '',
        quantity: '',
        price: '',
        date: ''
      });
        
    }
  };

    
  return (
    <>
      <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      

      <Row>
        <Col md={6}>
        <Alert variant="danger" style={{ display: errorMsg ? 'block' : 'none' }}>
          {errorMsg}
        </Alert>

        {editando ? (
          <h3>Editar Libro</h3>
        ) : (
          <h3>Nuevo Libro</h3>
        )}

        
        <Form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>

          <Form.Group controlId="name" className="mt-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="bookname"
              value={bookname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="author" className="mt-2">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="author"
              value={author}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="quantity" className="mt-2">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              className="input-control"
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="price" className="mt-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-submit mt-2">
            {editando ? 'Confirmar edición' : 'Agregar'}
          </Button>
        </Form>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default BookForm;