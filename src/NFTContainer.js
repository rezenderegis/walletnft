
import React from 'react';
import NFTCard from './NFTCard';

export const NFTContainer = ({nfts}) => {

    
  return (
    <div>

    {
        nfts.map((nft,index) => {
                return <NFTCard nft={nft} key={index}/>
            })}
        
    

    </div>
  )
}
export default NFTContainer;

