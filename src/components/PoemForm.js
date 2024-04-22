import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PoemForm = ({poems, setPoems, fetchPoems}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

 const URL_ENDPOINT = 'https://65a83fbb94c2c5762da885a9.mockapi.io/Poems'

  const addPoem = async (newPoem) => {

      try {
          let response = await fetch(URL_ENDPOINT, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newPoem)
          });
          let data = await response.json();
          fetchPoems(); 
      } catch (error) {
          console.error('Error:', error);
      }
  }



  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const newPoem = {
      Title: title,
      Author: author,
      Content: content
    };

    await addPoem(newPoem);

    // Clears form fields
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} required />
      </Form.Group>
      <Button variant="dark" type="submit">Submit</Button> 
    </Form>
  );
};

export default PoemForm;