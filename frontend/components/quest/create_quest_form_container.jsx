import { connect } from 'react-redux';
import QuestForm from './quest_form';
import { createQuest} from '../../actions/quest';
// import { fetchCategories } from '../../actions/category'
import {fetchAdventurers, fetchAdventurer } from '../../actions/adventurer';
import {fetchReviews} from '../../actions/review'

const mSTP = (state, ownProps) => {
    
    const creatorId = state.session.currentUser.id;
    const adventurers = Object.keys(state.entities.adventurers).map(key =>state.entities.adventurers[key]);
    const adv = state.entities.adventurers;
    const reviews = Object.keys(state.entities.reviews).map(key =>state.entities.reviews[key]);
    return ({
        creatorId,
        adventurers,
        adventurerId: ownProps[ownProps.match.params.id],
        adv,
        reviews
       
    })
}

const mDTP = dispatch => ({
    action: quest => dispatch(createQuest(quest)),
    // updateQuest: quest => dispatch(updateQuest(quest)),
    // fetchQuest: questId => dispatch(fetchQuest(questId)),
    fetchAdventurers: () => dispatch(fetchAdventurers()),
    fetch: advId => dispatch(fetchAdventurer(advId)),
    show: () => dispatch(fetchReviews())
})

export default connect(mSTP, mDTP)(QuestForm);
