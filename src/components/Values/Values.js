import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import T from 'prop-types';
import plannerSelectors from '../../redux/plannerSelectors';
import Value from '../Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = state => {
  return {
    budget: plannerSelectors.getBudget(state),
    expenses: plannerSelectors.getTottalExpenses(state),
    balance: plannerSelectors.getBalance(state),
  };
};

Values.propTypes = {
  budget: T.number.isRequired,
  expenses: T.number.isRequired,
  balance: T.number.isRequired,
};

export default connect(mapStateToProps)(Values);
