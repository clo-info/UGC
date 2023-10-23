import React from 'react'

import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className='border-4 border-red-800 border-dashed text-8xl m-40'>
            <h1 className='mx-10 my-10'>Slideshow using Bootstrap</h1>
        </div>
        <div id='button_section' className='border-5 border-red-900 border-solid text-4xl'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Link to="/Problem">Button to proceed to the Problem Page</Link></button>
        </div>
        </>
    );
  }
  
  export default Home;