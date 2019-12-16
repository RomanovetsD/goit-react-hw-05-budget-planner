import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as actions from '../../redux/plannerActions';

const mapDispatchToProps = dispatch => ({
  onSave: amount => dispatch(actions.enterBudget(amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
