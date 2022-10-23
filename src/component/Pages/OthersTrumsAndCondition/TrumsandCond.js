import React from 'react';
import { Link } from 'react-router-dom';

const TrumsandCond = () => {
    return (
        <div>
            <h3>Here is our Terms and conditions</h3>
            <p>Go back to registration: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TrumsandCond;