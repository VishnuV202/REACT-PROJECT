import React from 'react';
import './Register.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <p style={{textAlign:'center',fontFamily:'Bahnschrift',fontWeight:'bold'}}>CREATE AN ACCOUNT</p>
          <div>
            <label>Email</label>
            <input type='text' style={{width:'380px'}} required />
          </div>
          <div>
            <label>Password</label>
            <input type='password' style={{width:'380px'}} required />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='password' required style={{width:'380px'}}/>
          </div>
          <div>
            <Button variant="outlined" type='submit' style={{width:'380px'}}>Register</Button>
          </div>
          <div>
            <p style={{textAlign:'center'}}>Already have an account?</p>
            <Button variant="contained" style={{marginLeft:'5px',width:'380px'}} onClick={() => navigate('/login')}>Sign in</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register;
