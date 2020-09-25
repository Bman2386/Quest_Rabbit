import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY
} from '../actions/category'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORIES:
        return Object.assign({}, action.categories);
        case RECEIVE_CATEGORY:
        return Object.assign({}, action.category);
        default:
        return state;
    }
}