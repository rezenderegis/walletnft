import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NFTContainer from './NFTContainer';
//import { response } from 'express';

function App() {


  //2. UseState - just start and will complete
  const [getWalletAddress, setWalletAddress] = useState(null);

  const [nfts, setNfts] = useState([])

  const connectWallet = async () => {

    //Exactly the code of Metamask Documentation 
    //https://docs.metamask.io/guide/getting-started.html#basic-considerations

    if (typeof window.ethereum !== 'undefined') {

      /*1 - We have the accounts. Now we need to save.
      Using use State
      */
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      //3 - Set the first account
      setWalletAddress(accounts[0]);
      
    }

  }

  const getNftData = async () => {

    if (!getWalletAddress) return;

    //https://api.rarible.org/v0.1/doc#operation/getItemsByOwnerWithOwnership

   // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${getWalletAddress}`);

    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x60f80121c31a0d46b5279700f9df786054aa5ee5`);

    const data = await response.json();

    setNfts(data.items)

    debugger
     
  }

  useEffect(() => {
    getNftData()
  }, [getWalletAddress])


  return (
    <div className="App">
      <div>
        Account: {getWalletAddress}
      </div>
      <button className='connect-wallet' onClick={connectWallet}>
        Connect Wallet
      </button>
      <NFTContainer nfts={nfts} />
    </div>
  );
}

export default App;
