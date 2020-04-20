import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
