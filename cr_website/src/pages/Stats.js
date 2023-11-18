import React from 'react'

import StatsCounter1 from '../components/StatsCounter1';
import StatsCounter2 from '../components/StatsCounter2';
import StatsCounter3 from '../components/StatsCounter3';

function Stats() {
    return (
            <>
                <div className='counters'>
                    <h1 className='text-4xl mx-10 my-10'>By 2050, due to changes in climate, there are expected to be</h1>
        
                    <div className='statsBlock1'>
                        <StatsCounter1 />
                    </div>
                    <div className='statsBlock2'>
                        <StatsCounter2 />
                    </div>
                    <div className='statsBlock3'>
                        <StatsCounter3 />
                    </div>
                </div>
        
                <div className='lighterFacts'>
                    <h1>Some Other Quick Facts:</h1><br></br>
                    <div className='stat'>
                        <h2 className='statsNumber'>17%</h2>
                        <h3>
                        &nbsp; of Bangladesh is expected to be under water by 2050, resulting in 20 million more displacements.<br></br>
                        That's an area the size of Georgia, and a population the size of Florida's.
                        </h3>
                    </div>
                    <div className='stat'>
                        <h2 className='statsNumber'>32.6</h2>  
                        <h3>
                            million people have been displaced in 2022 alone. 
                        </h3> 
                    </div>
                    <div className='stat'>
                        <h2 className='statsNumber'>53%</h2>
                        <h3> the proportion of internal displacements thought to be caused by climate change impacted disasters</h3>
                    </div>
                </div>
            </>
            /* 17% of Bangladesh will be under water by 2050 and 20 million more will lose their homes */
            /* Maybe copy chart from https://www.migrationdataportal.org/themes/environmental_migration_and_statistics */
            /* 32.6 million internal displacements caused by natural disasters in 2022, 41% than the average of the previus decade, 'https://www.migrationdataportal.org/themes/environmental_migration_and_statistics' */

    );
};

export default Stats;