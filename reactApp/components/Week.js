import React from 'react';
import Days from './Days';
import Appointment from './Appointment';
import { connect } from 'react-redux';

let Week = ({daysOfWeek}) => {
    return(
      <div className = "container-fluid">
        <div className = 'col-xs-offset-1'>
      {daysOfWeek.map((day)=>
        <Days key = {day} day = {day} className = "col-xs-4" />
      )}
  </div>
  </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

// var daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const mapStateToProps = () =>{
  return{
    daysOfWeek: ['Monday']
  }
}

Week = connect(mapStateToProps, mapDispatchToProps)(Week);

export default Week;
