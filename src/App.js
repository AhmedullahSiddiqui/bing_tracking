import React from "react";
import "./styles.css";

export default function App() {
  function handleOnClick() {
    window.uetq = window.uetq || [];
    window.uetq.push("event", "Purchase", {
      event_category: "Converson",
      event_label: "Top of the Rock",
      transaction_id: "123",
      revenue_value: 64,
      event_value: 74,
      tax: 10,
      currency: "USD",
      shipping: 0,
      coupon: NaN,
      items: [
        { id: 1, name: "abc" },
        { id: 5, name: "abc" },
        { id: 3, name: "abc" }
      ]
    });
  }

  return (
    <div className="App">
      <button onClick={() => handleOnClick()}> Buy Tickets </button>
    </div>
  );
}
