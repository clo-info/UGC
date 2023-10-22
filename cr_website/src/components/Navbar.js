import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to='/home'>
                    Home</Link>
                <Link to='/problem'>

                </Link>
                <Link to='/stats'>
                    
                </Link>
                <Link to='/solutions'>

                </Link>
            </div>
        </div>
    )
}

export default Navbar;