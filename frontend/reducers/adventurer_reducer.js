import {RECEIVE_ADVENTURERS} from '../actions/adventurer';


const adventurerReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ADVENTURERS:
            const adventurers = {};
            action.adventurers.forEach(adventurer => {
                adventurers[adventurer.id] = adventurer;
            });
        return adventurers
        default:
            return state;
    }
}

export default adventurerReducer