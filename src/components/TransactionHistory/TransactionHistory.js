import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) =>(
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <ul>
{items.map(({id, type, amount, currency}) => (
    <li key = {id}>
<tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
</li>
))}
</ul>

</table>
)

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;