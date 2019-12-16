import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as plannerActions from '../../redux/plannerActions';

const mapDispatchToProps = dispatch => {
  return {
    onSave: (name, amount) => dispatch(plannerActions.addExpense(name, amount)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
