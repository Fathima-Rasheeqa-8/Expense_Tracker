//TransactionList.js
import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <ul className="list">
      {transactions.map(transaction => (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
          {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;