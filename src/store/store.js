import { createStore } from 'redux';
import emailReducer from './reducers/emailReducer';

const store = createStore(emailReducer);

export default store;
