import {combineReducers} from 'redux';
import locationReducer from './location';
import {visibilityFilter, todos} from './todoReducer';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        todos: todos,
        visibilityFilter: visibilityFilter,
        ...asyncReducers
    })
};

export const injectReducer = (store, {key, reducer}) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
