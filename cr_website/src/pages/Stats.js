import React from 'react'

import { Link } from 'react-router-dom';

function Stats() {
    return (
        <><div>
            <h1 className='text-4xl mx-10 my-10'>These will be filled with professionally displayed stats</h1>
        </div><div className='border-4 border-red-800 border-dashed text-8xl m-40'>
                <h1 className='mx-10 my-10'>Statistics</h1>
            </div>
            <div className='border-4 border-red-800 border-dashed text-8xl m-40'>
                <h1 className='mx-10 my-10'>Statistics</h1>
            </div>
            <div className='border-4 border-red-800 border-dashed text-8xl m-40'>
                <h1 className='mx-10 my-10'>Statistics</h1>
            </div>
            <div id='button_section' className='border-5 border-red-900 border-solid text-4xl'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Link to="/Solutions">Button to proceed back to the Solutions Page</Link></button>
            </div></>

    )
}

export default Stats;