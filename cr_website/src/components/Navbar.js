import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='text-2xl'>
            <div className='navbar_links'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/Problem'>
                    Problem
                </Link>
                <Link to='/Stats'>
                    Stats
                </Link>
                <Link to='/Solutions'>
                    Solutions
                </Link>
            </div>
        </div>
    )
}

export default Navbar;