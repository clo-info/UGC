import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar_links'>
                <Link className='' to='/'>
                    Home
                </Link>
                <Link className='' to='/Problem'>
                    Problem
                </Link>
                <Link className='' to='/Stats'>
                    Stats
                </Link>
                <Link className=''to='/Solutions'>
                    Solutions
                </Link>
            </div>
        </div>
    )
}

export default Navbar;