import React from "react";
import Fruit from "./Fruit";
import Message from "./Message";

export default function Fruits() {
  // const fruits = ['Apple',"Mango",'Bannana','Orange','Pineaple'];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldOut: true },
    { name: "Mango", price: 7, emoji: "🥭", soldOut: false },
    { name: "Bannana", price: 2, emoji: "🍌", soldOut: true },
    { name: "Orange", price: 5, emoji: "🍊", soldOut: false },
    { name: "Pineaple", price: 8, emoji: "🍍", soldOut: true },
  ];
  return (
    <div>
      <ul>
        {/* {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
        ))} */}
        <Message/>
      </ul>
    </div>
  );
}
