import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const location=useLocation()
 const from=location.state?.from?.pathname || '/';
  const[error,setError]=useState('')
    const navigate=useNavigate()
    const {signInUser,setLoading}=useContext(AuthContext)
    const handleSubmit =(event)=>{
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password= form.password.value;
         console.log(email,password)

         signInUser(email,password)
         .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset()
            setError('')
            if(user.emailVerified){
              navigate(from,{replace:true})
            }
            else{
              toast.error("plz verify your email")
            }
            
            
         })
         .catch(error=>{
          console.log(error)
          setError(error.message);
        })
        .finally(()=>{
          setLoading(false);
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <br />
      {error}
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Link to='/register'>register</Link>
     
    </Form>
    );
};

export default Login;