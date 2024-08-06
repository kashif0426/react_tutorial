import React from "react";

export default function Fruit({ emoji, name, price, soldOut }) {
  return (
    <>
      <li>
        {emoji} {name} {price}€ {soldOut ? "Sold Out" : ""}
      </li>
      {/* {price > 5 ? (
        <li>
          {emoji} {name} {price}€{" "}
        </li>
      ) : (
        ""
      )} */}
    </>
  );
}
