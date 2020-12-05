import { connect } from 'react-redux';
import CancelQuest from './cancel_quest';
import { updateQuest, fetchQuest } from '../../actions/quest';
import {updateAdventurer, fetchAdventurer} from '../../actions/adventurer';
import {createReview, fetchReviews} from '../../actions/review'

const mSTP = (state, ownProps) => {
    const creatorId = state.session.currentUser.id;
    const adventurers = Object.keys(state.entities.adventurers).map(key =>state.entities.adventurers[key]);
    const questId = ownProps.match.params.questId;
    const quest = state.entities.quests.extract;
    const reviews = Object.keys(state.entities.reviews).map(key => state.entities.reviews[key])
    
    return ({
        creatorId,
        adventurers,
        questId,
        quest,
        reviews
        
    })
}

const mDTP = dispatch => ({
    updateQuest: quest => dispatch(updateQuest(quest)),
    fetchQuest: questId => dispatch(fetchQuest(questId)),
    updateAdventurer:adId => dispatch(updateAdventurer(adId)),
    createReview: review => dispatch(createReview(review)),
    fetchAdventurer: adId => dispatch(fetchAdventurer(adId)),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP, mDTP)(CancelQuest);
