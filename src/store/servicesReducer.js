const initialState = {
    services: 0
}

const SET_PRICE = 'SET_SERVICE'

const servicesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SERVICE':
            return { ...state, services: {...state.services, ...action.payload}}
        default:
            return state;
    }
}

export default servicesReducer;