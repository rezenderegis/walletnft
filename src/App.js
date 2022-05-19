import logo from './logo.svg';
import './App.css';

function App() {

  const connectWallet = async () => {




    //Exactly the cole of Metamask Documentation 
    //https://docs.metamask.io/guide/getting-started.html#basic-considerations

    if (typeof window.ethereum !== 'undefined') {

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      debugger
    }

  }

  return (
    <div className="App">
      <div>
        Account
      </div>
      <button className='connect-wallet' onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
