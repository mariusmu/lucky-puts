import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from './rootReducer';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

export const ConfigureStore = (history: History) => {
    const storeEnhancer = applyMiddleware(thunk, routerMiddleware(history));
    return storeEnhancer(createStore)(RootReducer, {});
};
