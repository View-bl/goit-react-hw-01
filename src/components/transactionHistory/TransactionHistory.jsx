import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>Type</th>
          <th className={styles.tableHeader}>Amount</th>
          <th className={styles.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tableRow}>
            <td className={styles.tableCell}>{type}</td>
            <td className={styles.tableCell}>{amount}</td>
            <td className={styles.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
