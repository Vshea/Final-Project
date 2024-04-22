import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PoemForm from './PoemForm';
import PoemList from './PoemList'; // Import the PoemList component

const CreatePage = () => {
  const [poems, setPoems] = useState([]);
  const fetchPoems = async () => {
    try {
      const response = await fetch('https://65a83fbb94c2c5762da885a9.mockapi.io/Poems');
      if (!response.ok) {
        throw new Error('Failed to fetch poems');
      }
      const data = await response.json();
      setPoems(data);
      
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const updatePoem = async (updatedPoem) => {
    try {
      const response = await fetch(`https://65a83fbb94c2c5762da885a9.mockapi.io/Poems/${updatedPoem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPoem)
      });
      if (!response.ok) {
        throw new Error('Failed to update poem');
      }
      // Update the state with the updated poem
      const updatedPoems = poems.map(poem => (poem.id === updatedPoem.id ? updatedPoem : poem));
      setPoems(updatedPoems);
      console.log('Poem updated successfully');
    } catch (error) {
      console.error('Error updating poem:', error);
    }
  };

  const deletePoem = async (poemId) => {
    try {
      const response = await fetch(`https://65a83fbb94c2c5762da885a9.mockapi.io/Poems/${poemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete poem');
      }
      // Update the state by removing the deleted poem
      const updatedPoems = poems.filter(poem => poem.id !== poemId);
      setPoems(updatedPoems);
      console.log('Poem deleted successfully');
    } catch (error) {
      console.error('Error deleting poem:', error);
    }
  };
  

  useEffect(() => {
    fetchPoems();
  }, []);
  

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="left-container">
            <h2>Create New Poem</h2>
            <PoemForm poems={poems} setPoems={setPoems} fetchPoems={fetchPoems}/> 
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="right-container">
            <h2>Poem List</h2>
            <PoemList poems={poems} updatePoem={updatePoem} deletePoem={deletePoem}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePage;