import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Formlist = () => {
    return (
        
        <div >
        <Box style={{width:"50%"}} 
        className='border-solid border-2 border-indigo-600 '   
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-number"
          label="Your Child"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
     
    </Box>
    
    </div>
  );
}
    


export default Formlist;

