import {getUsers} from '../utils/adventurer';

export const RECEIVE_ADVENTURERS = 'RECEIVE_ADVENTURERS';

const receiveAdventurers = (adventurers) => ({
    type: RECEIVE_ADVENTURERS,
    adventurers
})



export const fetchAdventurers = () => dispatch => {
    
    return (
        getUsers()
        .then((adventurers) => dispatch(receiveAdventurers(adventurers)))
    )
}