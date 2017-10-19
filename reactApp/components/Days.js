import React from 'react';
import Hours from './Hours';

const Days = ({day}) => {
  let hours = ['9', '10', '11','12','1','2','3','4','5'];
    return(
      <div style = {{backgroundColor: 'white', padding: 20}}>
      <h2>  {day} </h2>
        {hours.map((hour)=><Hours key = {day + hour.toString()} day = {day} hour = {hour}/>)}
      </div>
    )
}

export default Days;
