import React from 'react';

//To create the bases just write raf and will complete automaticly

export const NFTCard = ({nft}) => {
  return (
    <div>
        {nft.meta.name}
    </div>
  )
}

export default NFTCard;