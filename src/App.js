import logo from './logo.svg';
import './App.css';

function App() {

  const connectWallet = async () => {

    //2. UseState - just start and will complete
    const [getWalletAddress, setWalletAddress] = useState(null);



    //Exactly the code of Metamask Documentation 
    //https://docs.metamask.io/guide/getting-started.html#basic-considerations

    if (typeof window.ethereum !== 'undefined') {

      /*1 - We have the accounts. Now we need to save.
      Using use State
      */
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      
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
