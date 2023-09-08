import React from "react";
import vector from "../../Assets/baseline-token.svg";

const QuoteTokenCard = ({ name, symbol, address }) => {
  return (
    <div className="pair-card">
      <div>
        <h4>Base Token</h4>
        <div className="table">
          <div className="tr">
            <div className="td1">Name</div>
            <div className="td2">{name}</div>
          </div>
          <div className="tr">
            <div className="td1">Symbol</div>
            <div className="td2">{symbol}</div>
          </div>
          <div className="tr">
            <div className="td1">Address</div>
            <div className="td2">{address}</div>
          </div>
        </div>
        <div className="card-btn">
          <img src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuoteTokenCard;
