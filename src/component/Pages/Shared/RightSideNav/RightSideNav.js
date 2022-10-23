import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GoMarkGithub } from "react-icons/go";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebook, FaGithub, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import Carosel from '../BrandCarosel/Carosel';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';


const RightSideNav = () => {
    const location =useLocation();
    const navigate=useNavigate();
    const from=location.state?.from.pathname || '/'
    const {providerLogin}=useContext(AuthContext);
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn =()=>{
        providerLogin(provider)
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary"><ImGoogle2></ImGoogle2>Login With Google</Button>
                    <Button variant="outline-dark"><GoMarkGithub></GoMarkGithub>Login with GitHub</Button>
                </ButtonGroup>
            </div>

            <div className='mb-2'>
                <h5 className='mb-2'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGithub></FaGithub>Github</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
               <Carosel></Carosel>
            </div>
        </div>
    );
};

export default RightSideNav;