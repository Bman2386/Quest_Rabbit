import {
    RECEIVE_QUESTS,
    RECEIVE_QUEST
} from '../actions/quest'

const QuestsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_QUESTS:
        return Object.assign({}, oldState, action.quests);
        case RECEIVE_QUEST:    
        return Object.assign({}, oldState, {[action.quest.id]: action.quest});
        default:
        return oldState;
    }
}

export default QuestsReducer;