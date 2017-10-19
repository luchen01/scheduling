import {createStore} from 'redux';

var initState = {
  day: '',
  hour: ''};

const datereducer = (state = initState, action) =>{
  switch(action.type){
    // case "ADD_DATE":
    //     const newName = Object.assign({}, state)
    //     newName.name = action.name
    //     return newName;
    // case "ADD_HOUR":
    //     const newPhone = Object.assign({}, state)
    //     newPhone.phone = action.phone;
    //     console.log(newPhone);
    //     return newPhone;
    case "ADD_APP":
        const newState = Object.assign({}, state)
        newState.day = action.day;
        newState.hour = action.hour;
        console.log(newState);
        return newState;
    default:
    return state;
  }
}

export default datereducer;
