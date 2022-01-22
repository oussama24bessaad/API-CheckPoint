import React from 'react'
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const User = ({user}) => {
    return (
        
       <div >
           <center>
     <Col className="align-items-center justify-content-between">
     <Card style={{ width: "20rem", backgroundColor: "#3f75da",}}>
        <Card.Body className="d-flex justify-content-center">
        <Card.Title><h2>{user.name}</h2>
        </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroupItem>
      <h4 >{user.username}</h4>
      </ListGroupItem>
      <ListGroupItem>
      
        <h3>E-mail :</h3>
        <span>{user.email}</span>
        </ListGroupItem>
        <ListGroupItem> 
      
        <h3>Phone : {user.phone} </h3>
        </ListGroupItem>
        <span >{user.phone.split('-').join('.')}</span>
        <ListGroupItem>
      <a href="#">Contact</a>
      </ListGroupItem>
      </ListGroup>
      </Card>
      </Col>
      </center>
    </div>
        
    )
}

export default User
 