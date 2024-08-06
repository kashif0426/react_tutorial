import React from "react";

export default function Fruit({ emoji, name, price }) {
  return (
    <>
      {/* {emoji} {name} {price}€  */}
      {price > 5 ? (
        <li>
          {emoji} {name} {price}€{" "}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
