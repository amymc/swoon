import { createStore } from 'redux';
import rootReducer from './reducers';

import products from './data/products';

const defaultState = {
  products
};

const store = createStore(
  rootReducer,
  defaultState
);

export default store;
