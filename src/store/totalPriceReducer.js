const initialState  = {
    totalArea: 0
}

const ADD_AREA = "ADD_AREA";
const REMOVE_AREA = "REMOVE_AREA";

const totalPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AREA: 
        return { ...state, totalArea: {...state.totalArea, ...action.payload}} 
        case REMOVE_AREA: 
        return {...state, totalArea: state.totalArea - action.payload}
        default: 
        return state;

          
    }
}

export default totalPriceReducer;