import React from 'react';
import {  Link} from 'react-router-dom'


const NAvbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-dark px-5'>
            <Link to='/'  ><h1 className='text-white'>Welcome thu Redux Crud</h1></Link>
        </nav>
    );
};

export default NAvbar;