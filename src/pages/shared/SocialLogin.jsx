import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleGoogle = () =>{

        signInWithGoogle()
        .then((result) =>{
            console.log('Successfully Google Login: ', result.user);
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