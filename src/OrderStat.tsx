import React from "react";
import "./OrderStat.scss";

interface OrderStatProps {
  label: string;
  value: string | number;
}

const OrderStat: React.FC<OrderStatProps> = ({ label, value }) => {
  return (
    <div className="OrderStat">
      <div className="OrderStat__label">{label}</div>
      <div className="OrderStat__value">{value}</div>
    </div>
  );
};

export default OrderStat;
