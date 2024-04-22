import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

const PoemList = ({ poems, updatePoem, deletePoem }) => {
  const [selectedPoem, setSelectedPoem] = useState(null);

  const handleEdit = (poem) => {
    setSelectedPoem(poem);
  };
  return (
    <div>
      {poems.map(poem => (
        <div key={poem.id}>
          <h3>{poem.Title}</h3>
          <p>Author: {poem.Author}</p>
          <p>Poem:</p>
          <p>{poem.Content}</p>
          <button onClick={() => handleEdit(poem)}>Edit</button> {/* Edit button */}
          <button onClick={() => deletePoem(poem.id)}>Delete</button> {/* Delete button */}
          {selectedPoem && selectedPoem.id === poem.id && (
            <UpdateForm poem={selectedPoem} updatePoem={updatePoem} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PoemList;