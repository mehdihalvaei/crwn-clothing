// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const middlewares = [logger];

// const store = createStore(rootReducer , applyMiddleware(...middlewares));

// export default store;


import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));



export default { store };
