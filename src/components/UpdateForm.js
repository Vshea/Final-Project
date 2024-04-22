import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateForm = ({ poem, updatePoem }) => {
  const [updatedTitle, setUpdatedTitle] = useState(poem.Title);
  const [updatedAuthor, setUpdatedAuthor] = useState(poem.Author);
  const [updatedContent, setUpdatedContent] = useState(poem.Content);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPoem = {
      ...poem,
      Title: updatedTitle,
      Author: updatedAuthor,
      Content: updatedContent
    };
    await updatePoem(updatedPoem);
    setFormSubmitted(true); // Update state to indicate form submission
  };

  return (
    <div>
      {formSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value={updatedAuthor} onChange={(e) => setUpdatedAuthor(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3} value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} required />
          </Form.Group>
          <Button variant="dark" type="submit">Update</Button>
        </Form>
      )}
    </div>
  );
};

export default UpdateForm;