import {createStore} from 'redux';

var initState = {
  name: '',
  phone: ''};

const contactreducer = (state = initState, action) =>{
  switch(action.type){
    case "ADD_NAME":
        const newName = Object.assign({}, state)
        newName.name = action.name
        return newName;
    case "ADD_PHONE":
        const newPhone = Object.assign({}, state)
        newPhone.phone = action.phone;
        return newPhone;
    // case "ADD_APP":
    //     return state;
    case "CANCEL":
        return initState;
    default:
    return state;
  }
}

export default contactreducer;
