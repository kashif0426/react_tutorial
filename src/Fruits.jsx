import React from "react";
import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ['Apple',"Mango",'Bannana','Orange','Pineaple'];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Bannana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineaple", price: 8, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}
