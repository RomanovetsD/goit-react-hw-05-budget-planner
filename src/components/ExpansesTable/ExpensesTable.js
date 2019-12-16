import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses = [], onRemove }) => (
  <>
    {expenses.length > 0 && (
      <Table>
        <thead>
          <tr>
            <th>Expense name</th>
            <th>Expense amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, expenseAmount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{expenseAmount}</td>
              <td>
                <Button label="Delete" onClick={() => onRemove(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </>
);

ExpensesTable.propTypes = {
  // eslint-disable-next-line
  expenses: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ExpensesTable;
