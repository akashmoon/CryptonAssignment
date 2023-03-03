import React from "react";
import OrderStat from "./OrderStat";
import data from "./data.json";
import "./WidgetOrderStats.scss";

const WidgetOrderStats: React.FC = () => {
  const { orders, revenue, dinein, takeaway } = data;

  return (
    <div className="WidgetOrderStats">
      <OrderStat label="Orders" value={orders} />
      <OrderStat label="Revenue" value={`$${revenue}`} />
      <OrderStat label="dinein" value={dinein} />
      <OrderStat label="takeaway" value={`${takeaway}`} />
    </div>
  );
};

export default WidgetOrderStats;
