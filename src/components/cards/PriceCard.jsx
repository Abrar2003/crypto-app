import React from 'react';
import vector from "../../Assets/pepicons-pop_dollar.svg"

const PriceCard = ({priceNative,priceUsd}) => {
  return (
    <div className='pair-card'>
      <div>
        <h4>Base Token</h4>
        <div className="table">
          <div className="tr">
            <div className="td1">Price Nativ</div>
            <div className="td2">{priceNative}</div>
          </div>
          <div className="tr">
            <div className="td1">Price USD</div>
            <div className="td2">{priceUsd}</div>
          </div>
        </div>
        <div className='card-btn'>
          <img src={vector} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PriceCard