import { connect } from 'react-redux';
import QuestForm from './quest_form';
import { createQuest} from '../../actions/quest';
import {fetchAdventurers} from '../../actions/adventurer';
import {fetchReviews} from '../../actions/review'

const organizeData=(data)=> {
    const form = {}
    for (const key in data){
        if (key=== 'id') form['id'] = `${data[key]}`;
        if (key === 'ex_description') form['details'] = data[key];
        if (key === 'name') form['quest_name'] = data[key]
    }
    if (!form.id) form['id'] = '';
    if (!form.details) form['details'] = '';
    if (!form.quest_name) form['quest_name'] = '';
    debugger
    return form
}

const mSTP = (state, ownProps) => {
    const creatorId =  Boolean(state.session.currentUser) ? state.session.currentUser.id: null;
    const adventurers = Object.keys(state.entities.adventurers).map(key =>state.entities.adventurers[key]);
    const reviews = Object.keys(state.entities.reviews).map(key =>state.entities.reviews[key]);
    const data =  organizeData(state.entities.temp) 
    return ({
        creatorId,
        adventurers,
        adventurerId: ownProps[ownProps.match.params.id],
        reviews,
        data
       
    })
}

const mDTP = dispatch => ({
    action: quest => dispatch(createQuest(quest)),
    fetchAdventurers: () => dispatch(fetchAdventurers()),
    show: () => dispatch(fetchReviews())
})

export default connect(mSTP, mDTP)(QuestForm);
