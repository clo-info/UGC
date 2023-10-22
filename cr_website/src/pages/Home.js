import React from 'react'

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 className='text-3xl font-bold'>This is the home page</h1>
            <Link to="Problem">Click to view our problem statement page</Link>
            <Link to="Stats">Click to view our statistics page</Link>
        </div>
    );
  }
  
  export default Home;