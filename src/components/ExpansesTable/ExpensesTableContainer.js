import { connect } from 'react-redux';
import ExpansesTable from './ExpensesTable';
import plannerSelectors from '../../redux/plannerSelectors';
import * as actions from '../../redux/plannerActions';

const mapStateToProps = state => {
  return {
    expenses: plannerSelectors.getExpences(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(actions.removeExpanse(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpansesTable);
