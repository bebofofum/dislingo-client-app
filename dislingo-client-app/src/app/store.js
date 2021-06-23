import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from '../features/counterSlice';
import rootReducer from '../reducers/index';


const store = createStore(
  rootReducer
);

export default store
