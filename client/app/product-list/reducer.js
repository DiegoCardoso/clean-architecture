import { fromJS } from 'immutable';
import productList from 'product-list/state';
import { PRODUCTS_LOADED } from 'product-list/action-types';

const initialState = fromJS(productList);

function productListReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return state.set('products', action.payload);
    default:
      return state;
  }
}

export default productListReducer;
