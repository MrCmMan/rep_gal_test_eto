import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { DATA_AVAILABLE } from "../actions/" 

let dataState = { data: [], loading:true };


//редьюсер для получения JSON с ссылками на изображения
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;