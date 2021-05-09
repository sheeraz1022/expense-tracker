import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import './App.css';
import styled from 'styled-components'
import { GlobalProvider } from './context/GlobalState';


/* position: absolute;
left: 50%;
transform: translate(-50%); */


const AppWrapper = styled.div`
background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Lato', sans-serif;
`

function App() {
  return (
    <GlobalProvider>
      <AppWrapper>
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </AppWrapper>
    </GlobalProvider>
  );
}

export default App;
