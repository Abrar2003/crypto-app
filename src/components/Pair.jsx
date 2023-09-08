import React from 'react'
import BaseTokenCard from './cards/BaseTokenCard'
import BasicInfoCard from './cards/BasicInfoCard'
import QuoteTokenCard from './cards/QuoteTokenCard'
import PriceCard from './cards/PriceCard'

const Pair = ({pairCreatedAt, pairAddress, dexId, baseToken, quoteToken, priceNative, priceUsd}) => {
  return (
    <div className='pair'>
        <BasicInfoCard pairCreatedAt={pairCreatedAt} address={pairAddress} dexId={dexId} symbol={baseToken.symbol} />
        <BaseTokenCard name={baseToken.name} address={baseToken.address} symbol={baseToken.symbol} />
        <QuoteTokenCard name={quoteToken.name} address={quoteToken.address} symbol={quoteToken.symbol} />
        <PriceCard priceNative={priceNative} priceUsd={priceUsd} />
    </div>
  )
}

export default Pair