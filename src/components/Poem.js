import React from 'react';
import Card from 'react-bootstrap/Card';

const Poem = ({ title, author, content }) => {
  return (
    <Card style={{ height: '100%', overflowY: 'auto' }}>
      <Card.Body style={{ maxHeight: '200px', overflowY: 'auto' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Poem;