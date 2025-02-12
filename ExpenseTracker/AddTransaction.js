import React, { useState, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  );
};

export default AddTransaction;
