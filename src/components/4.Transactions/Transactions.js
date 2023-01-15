import css from './Transaction.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({ transactions }) => {
    return (
        <section className={css.transactionHistory}>
            <table className={css.transactionHistoryTable}>
                <thead className={css.tableHeader}>
                    <tr className={css.tableHeaderRow}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id} className={css.tableBodyRow}>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currency}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </section>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
};