import {connect} from 'react-redux';
import Categories from './category_show';
import { fetchCategories } from '../../actions/category'
// import  {categoryReducer}  from '../../reducers/category_reducer'

// import {  }
const mapStateToProps = (state, ownProps) => {
  return {
    categoryid: ownProps[ownProps.match.params.id],
    categories: Object.keys(state.entities.categories).map(key => state.entities.categories[key])
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);