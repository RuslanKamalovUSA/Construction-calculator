import { combineReducers, createStore } from 'redux';
import totalPriceReducer from './totalPriceReducer';
import servicesReducer from './servicesReducer';

const rootReducer = combineReducers({
    services: servicesReducer,
    prices: totalPriceReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;