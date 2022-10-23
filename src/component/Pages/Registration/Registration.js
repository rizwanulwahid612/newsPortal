import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Registration = () => {
  const [disable,setDisable]=useState(true)
  const[error,setError]=useState('')
    const navigate=useNavigate()
    const {createUser,varifyEmail,updateUserProfile}=useContext(AuthContext)
    const handleSubmit =(event)=>{
         event.preventDefault();
         const form = event.target;
         const name= form.name.value;
         const photoURL = form.photoURL.value;
         const email = form.email.value;
         const password= form.password.value;
         console.log(name,photoURL,email,password)
         createUser(email,password)
         .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset()
            handleUpdateProfile(name,photoURL)
            console.log(name,photoURL)
            setError('')
            navigate('/login')
            handleVarification();
            toast.success('Plz varify your email')
         })
         .catch(error=>{
          console.log(error)
          setError(error.message);
        })
    }
    const handleUpdateProfile=(name,photoURL)=>{
      const profile={displayName:name,photoURL:photoURL}
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.log(error))
    }
    const handleVarification=()=>{
      varifyEmail()
      .then(() => {
      
      })
      .catch(error=>{
        console.log(error)
        setError(error.message)
      })
    }

    return (
        <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={()=>setDisable(!disable)}
         type="checkbox" 
         label={<>Accept<Link to='/terms'>Terms and conditions</Link></>} />
        <br />
      {error}
      </Form.Group>
      <Button disabled={disable} variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className='text-danger'>

      </Form.Text>
      <Link to='/login'>Login</Link>
    </Form>
    );
};

export default Registration;