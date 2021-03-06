import {LOGIN , IS_LOADING, IS_BTN_DISABLED,
    CATEGORIES_LOADED, PRODUCTS_LOADED, PRODUCTS_COUNTED,
    PRODUCTS_AVAILABILITY_LOADED, VALUE_SELECTED, SPECIFIC_PRODUCT_FETCHED, SPECIFIC_CATEGORY_FETCHED
} from "./actionTypes";


export const login = (access_token, username,first_name, last_name,role) => ({
    type: LOGIN,
    access_token, 
    username,
    first_name,
    last_name,
    role
});

export const isBtnDisabled = (value) => ({
    type: IS_BTN_DISABLED,
    isBtnDisabled: value
});

export const isAppLoading = (value) => ({
    type: IS_LOADING,
    isLoading:value
});

export const categoriesFetch = (categories) => ({
    type : CATEGORIES_LOADED,
    categories
});

export const productsFetched = (products) =>({
    type : PRODUCTS_LOADED,
    products
})

export const productsCounted = (value) =>({
    type: PRODUCTS_COUNTED,
    value
})

export const productsAvailabilityLoaded = (value)=>({
    type : PRODUCTS_AVAILABILITY_LOADED,
    value
})

export const valueSelected = (value)=>({
    type : VALUE_SELECTED,
    value
})

export const productFetchedById = (value)=>({
    type : SPECIFIC_PRODUCT_FETCHED,
    value
})
export const categoryFetchedById = (category)=>({
    type: SPECIFIC_CATEGORY_FETCHED,
    category
})