import {combineReducers} from 'redux'

function MainReducers (state = 0, actions){
    switch(actions.type){
        case "ADD":
            state = state+1
            return state
        default:
            return state
    }
    

}


export default combineReducers(
    {MainReducers}
) 