import React from 'react';
import { connect } from 'react-redux';

let Appointment = ({name, phone, hour, addName, addPhone, addApp}) => {
    return(
      <div>
        <div>
        <label>Name: </label>
        <input type = "text"
              placeholder = "name"
              onChange = {(event)=>addName(event.target.value)}
              value = {name}></input>
        </div>
        <div>
        <label> Phone Number: </label>
        <input type = "number"
              placeholder = "phone number"
              onChange = {(event)=>addPhone(event.target.value)}
              value = {phone}></input>
        </div>
        <div>
        <button onClick = {()=>addApp(name, phone)}>Submit</button>
      </div>
      </div>
    )
}


const mapDispatchToProps = (dispatch) =>{
  return{
    addName: (name)=>dispatch({type: 'ADD_NAME', name}),
    addPhone: (phone)=>dispatch({type: 'ADD_PHONE', phone}),
    addApp:()=>dispatch({type: 'ADD_APP'})
  }
}

const mapStateToProps = (state) =>{
  return{
    name: state.contactreducer.name,
    phone: state.contactreducer.phone,
  }
}

Appointment = connect(mapStateToProps, mapDispatchToProps)(Appointment);

export default Appointment;
