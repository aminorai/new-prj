import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const Mat = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <div style={{ marginTop: '50px', marginLeft: '50px', display: 'inline-block',height:'200px',padding:'50px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ marginRight: '25px'}}
          required
          id="outlined-required"
          label="What is your name ?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="type your name"
        />
        <TextField
          style={{ backgroundColor: 'white',color:'white'}}
          id="outlined-number"
          label="what is your age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button  type="submit" variant="contained" style={{ marginTop: '5px',marginLeft:'40px',borderRadius:'50px' }}>
          Show
        </Button>
      </form>
      {showMessage && (
        <Box style={{ width: '100%', marginTop: '25px',padding:'30px',backgroundColor:'green'}}>
          <Alert severity="success"><p style={{fontWeight:'bold'}}>{name}</p>   thanks for complete !</Alert>
        </Box>
      )}
    </div>
  );
};

export default Mat;