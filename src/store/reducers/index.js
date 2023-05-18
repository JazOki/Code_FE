// store/reducers/index.js
import { combineReducers } from 'redux';

const initialState = {
  emails: [],
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAILS':
      return {
        ...state,
        emails: action.payload,
      };
    // Agrega más casos según las acciones que desees manejar
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  email: emailReducer,
});

export default rootReducer;
