import React from "react";
import vector from "../../Assets/outline-info.svg";

const BasicInfoCard = ({ pairCreatedAt, symbol, address, dexId }) => {
  return (
    <div className="pair-card">
      <div style={{ width: "100%" }}>
        <h4>Base Token</h4>
        <div className="table">
          <div className="tr">
            <div className="td1">Pair created at</div>
            <div className="td2">{pairCreatedAt}</div>
          </div>
          <div className="tr">
            <div className="td1">Symbol</div>
            <div className="td2">{symbol}</div>
          </div>
          <div className="tr">
            <div className="td1">Dex ID</div>
            <div className="td2">{dexId}</div>
          </div>
          <div className="tr">
            <div className="td1">Addess</div>
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

export default BasicInfoCard;
