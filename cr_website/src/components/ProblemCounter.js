import React from "react";
import CountUp from 'react-countup';

import "./CounterStyles.css";



const Counter = () =>{
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
          end={294000000}
          duration={4}
          useEasing={true}
          useGrouping={true}
          separator=","
          decimals={0}
          decimal=","
          prefix=""
          suffix="+ Displaced Since 2008"
          onComplete={onComplete}
          onStart={onStart}
        />
      );
}

export default Counter; 