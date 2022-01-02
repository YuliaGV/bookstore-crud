import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { VscEdit, VscTrash } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Book = ({book, handleRemoveBook}) => {

    const navigate = useNavigate();


    const {id, bookname, author, price, quantity, date} = book;

    return (
        <Card style={{marginBottom: '1rem' }} className="book">
        <Card.Body>
            <Card.Title className="book-title">{bookname}</Card.Title>
            <div className="book-details">
            <div>Autor: {author}</div>
            <div>Cantidad: {quantity} </div>
            <div>Precio: {price} </div>
            <div>Fecha: {new Date(date).toDateString()}</div>
            </div>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" className="btn-edit" onClick={() => navigate(`/edit/${id}`)}>
                <VscEdit />
            </Button>
            {' '}  
            <Button variant="danger" onClick={() => handleRemoveBook(id)}>
                <VscTrash />
            </Button>
        </Card.Footer>


        </Card>
  );
};

export default Book;