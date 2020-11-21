import { ADD_TO_CART } from './cartTypes';

export const addToCart = (count = 1) => {
    return {
        type: ADD_TO_CART,
        payload: count
    }
}