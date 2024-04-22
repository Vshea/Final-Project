import React from 'react';
import Poem from './Poem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GalleryPage = () => {
  const poems = [
    { 
      title: 'The Old Pond', 
      author: 'Matsuo Bashō', 
      content: (
        <>
          An old silent pond<br />
          A frog jumps into the pond—<br />
          Splash! Silence again.
        </>
      )
    },
    { 
      title: 'Always Marry an April Girl', 
      author: 'Ogden Nash', 
      content: (
        <>
          Praise the spells and bless the charms,<br />
          I found April in my arms.<br />
          April golden, April cloudy,<br />
          Gracious, cruel, tender, rowdy;<br />
          April soft in flowered languor,<br />
          April cold with sudden anger,<br />
          Ever changing, ever true --<br />
          I love April, I love you.
        </>
      )
    },
    { 
      title: 'Fire & Ice', 
      author: 'Robert Frost', 
      content: (
        <>
          Some say the world will end in fire,<br />
          Some say in ice.<br />
          From what I've tasted of desire<br />
          I hold with those who favour fire.<br />
          But if it had to perish twice,<br />
          I think I know enough of hate<br />
          To say that for destruction ice<br />
          Is also great<br />
          And would suffice.
        </>
      )
    }
  ];

  return (
    <div>
      <Container>
        <h1>Gallery</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {poems.map((poem, index) => (
            <Col key={index}>
              <Poem title={poem.title} author={poem.author} content={poem.content} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GalleryPage;