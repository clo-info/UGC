import React from 'react';

import delegates from '../components/pictures/Delegates1.jpg';
import farmer from '../components/pictures/water_farmer1.png';
import factory from '../components/pictures/factory1.png';

function Solutions() {
    return (
        <div className='SolutionsPage'>
            <h1 className='SolutionPreamble'>The Betterment of Climate Refugees Everywhere Depends on <span style={{color: 'rgb(88, 55, 235)'}}>Three</span> Things...</h1>
            <div className='Solution'>
                <img src={delegates} alt='delegates000' className='soluImg'></img>
                <h2 className='SolutionTitle'>Refugee Status for those Displaced by Climate</h2>
                    <h3 className='SolutionBody'>
                        People who have come to be displaced by natural disasters or who have been forced to move 
                        because their land is no longer livable are, in most circumstances, not actually eligible for refugee status. 
                        This precludes them from access to life saving aid and relegates them to a largely forgotten status.
                    </h3>
            </div>
            <div className='Solution'>
                <img src={farmer} alt='farmer000' className='soluImg'></img>
                <h2 className='SolutionTitle'>Educate All Families on Sustainable Farming Practices</h2>
                    <h3 className='SolutionBody' >
                        The sustainable use of land will help to combat the encroachment of unarable growing space. Good practices when it comes to 
                        soil use, water conservation, etc. can help to future-proof a land against poor conditions, making sure it can sustain people longer
                    </h3>
            </div>
            <div className='Solution'>
                <img src={factory} alt='factory000' className='soluImg'></img>
                <h2 className='SolutionTitle'>A Halt to the Corporate Practices that Increase the Pace and Severity of Climate Change</h2>
                    <h3 className='SolutionBody'>
                        Last but not least we should get together to cut this problem off at the source. For decades the greatest contributors to the unnatural change
                        in our climate has been corporations. Automotive emissions largely come from economic acitivity that requires fuel powered vehicles. Not to mention the energy industry itself. The mining 
                        of rare earth mineral by the tech industry also relies on coporations. Hitting the issue here will actually result in real change. 
                    </h3>
            </div>
        </div>
    )
}

export default Solutions;