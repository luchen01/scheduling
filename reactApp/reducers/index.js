import { combineReducers } from 'redux';
import datereducer from './datereducer';
import contactreducer from './contactreducer';

const rootReducer = combineReducers({
    datereducer: datereducer,
    contactreducer: contactreducer
});

export default rootReducer;
