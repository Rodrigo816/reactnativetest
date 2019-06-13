import {createStore, combineReducers, compose} from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places:placesReducer
});
const composeEnhancers = compose;

const store = () => {
 
  return createStore(rootReducer, composeEnhancers(window.devToolsExtension ? window.devToolsExtension() : f => f));
}
export default store;