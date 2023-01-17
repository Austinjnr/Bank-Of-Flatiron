//import logo from './logo.svg';
import './App.css';
import NewTransactionsform from './components/NewTransactionsform';
import Searchform from './components/Searchform';
import Transactions from './components/Transactions';

function App() {
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <SearchForm/>
      <NewTransactionsform/>
      <Transactions/>
      
    </div>
  );
}

export default App;
