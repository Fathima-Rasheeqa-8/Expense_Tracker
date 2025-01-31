import './App.css';

import Header from './ExpenseTracker/Header.js';
import Balance from './ExpenseTracker/Balance.js';
import IncomeExpense from './ExpenseTracker/IncomeExpense.js';
import TransactionList from './ExpenseTracker/TransactionList.js';
import AddTransaction from './ExpenseTracker/AddTransaction.js';
import { GlobalProvider } from './ExpenseTracker/context/GlobalState.js';

function App() {
  return(
    <>
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    </>
  );
}
export default App;


