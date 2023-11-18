import React from "react";
import CountUp from 'react-countup';

import "./CounterStyles.css";



const StatsCounter1 = () =>{
    const onComplete = () => {
        console.log('Completed!');
      };
      
      const onStart = () => {
        console.log('Started!');
      };
      
      return(
        <CountUp
          className="refugee_number"
          start={0}
          end={17}
          duration={10}
          useEasing={true}
          useGrouping={true}
          separator=","
          decimals={0}
          decimal=","
          prefix=" "
          suffix=" Million Refugees in Latin America..."
          onComplete={onComplete}
          onStart={onStart}
        />
      );
}

export default StatsCounter1;