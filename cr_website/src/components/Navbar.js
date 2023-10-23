import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='text-3xl' id='NavStyle'>
            <div className='font-sans "Segoe UI"'>
                <Link className='px-10' to='/'>
                    Home
                </Link>
                <Link className='px-10' to='/Problem'>
                    Problem
                </Link>
                <Link className='px-10' to='/Stats'>
                    Stats
                </Link>
                <Link className='px-10'to='/Solutions'>
                    Solutions
                </Link>
            </div>
        </div>
    )
}

export default Navbar;