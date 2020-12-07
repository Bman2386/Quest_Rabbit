import { connect } from 'react-redux';
import CancelQuest from './cancel_quest';
import { updateQuest, fetchQuest } from '../../actions/quest';
import {updateAdventurer, fetchAdventurer} from '../../actions/adventurer';
import {createReview, fetchReviews} from '../../actions/review';

// Array.prototype.quickSort = function (func) {
//     if (this.length < 2) return this;
  
//     if (!func) {
//       func = (x, y) => {
//         if (x < y) return - 1;
//         return 1;
//       };
//     }
  
//     const pivot = this[0];
//     let left = this.slice(1).filter((el) => func(el, pivot) === -1);
//     let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
//     left = left.quickSort(func);
//     right = right.quickSort(func);
  
//     return left.concat([pivot]).concat(right);
//   };
const adSort = (arr) => {
    if (arr.length < 2) return arr;
    const func = (x, y) => {
        if (x < y) return - 1;
        return 1;
      };

    const first = arr[0];
    let left = arr.slice(1).filter(el => func(el.id, first.id) === -1);
    let right = arr.slice(1).filter(el => func(el.id, first.id) !== -1);
    left = adSort(left);
    right = adSort(right);

    return left.concat([first]).concat(right)

}

const mSTP = (state, ownProps) => {
    const creatorId = state.session.currentUser.id;
    const sortMe = Object.keys(state.entities.adventurers).map(key =>state.entities.adventurers[key]);
    const adventurers = sortMe.length > 0 ? adSort(sortMe) : sortMe
    const questId = ownProps.match.params.questId;
    const quest = state.entities.quests.extract;
    const reviews = Object.keys(state.entities.reviews).map(key => state.entities.reviews[key]);
    
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
