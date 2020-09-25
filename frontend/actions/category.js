import * as CatAPIUtil from '../utils/category'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'

const receiveCategories = () => ({
    type: RECEIVE_CATEGORIES
})

const receiveCategory = categoryId => ({
    type: RECEIVE_CATEGORY,
    categoryId
})

export const fetchCatgories = () => dispatch (
    CatAPIUtil.fetchCatgories()
    .then(() => dispatch(receiveCategories()))
)

export const fetchCategory = categoryId => dispatch (
    CatAPIUtil.fetchCategory(categoryId)
    .then(categoryId => dispatch(receiveCategory(categoryId)))
)