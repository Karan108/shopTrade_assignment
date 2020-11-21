import axios from 'axios';
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productTypes"

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}
export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.get('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/product.json?v=1604154041').then(res => {
            const products = res.data
            dispatch(fetchProductsSuccess(products))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg))
        })
    }
}

export const filterProducts = (tag) => {
    return (dispatch, getState) => {
        const products = getState().products.products.filter(ele => ele.tag === tag);
        dispatch(fetchProductsSuccess(products))
    }
}