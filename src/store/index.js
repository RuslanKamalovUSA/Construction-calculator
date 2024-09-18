import { combineReducers, createStore } from 'redux';
import totalAreaReducer from './totalAreaReducer';
import servicesReducer from './servicesReducer';
import setPricesReducer from './setPricesReducer';

const rootReducer = combineReducers({
    services: servicesReducer,
    area: totalAreaReducer,
    prices: setPricesReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;