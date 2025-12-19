import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state || '/';

    console.log('Social Location', location);

    const handleGoogle = () =>{

        signInWithGoogle()
        .then((result) =>{
            console.log('Successfully Google Login: ', result.user);
            navigate(from);
        })
        .catch((error) =>{
            console.log('Error => ', error.message);
        })


    };
    return (
        <div>
            <button onClick={handleGoogle} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;