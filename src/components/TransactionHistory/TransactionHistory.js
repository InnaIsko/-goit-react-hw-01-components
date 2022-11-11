import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableInfo,
  TableString,
} from '../TransactionHistory/TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableString key={item.id}>
            <TableInfo>{item.type}</TableInfo>
            <TableInfo>{item.amount}</TableInfo>
            <TableInfo>{item.currency}</TableInfo>
          </TableString>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
