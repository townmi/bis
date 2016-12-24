/**
 * Created by townmi on 16/12/24.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './todoActions'
const { SHOW_ALL } = VisibilityFilters;

export function visibilityFilter(state = SHOW_ALL, action) {
    //
    // if(!action) {
    //     return state;
    // }
    // console.log(action, state);
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

export function todos(state = [], action) {
    // if(!action) {
    //     return state;
    // }
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state
    }
}

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
// });
//
// export default todoApp