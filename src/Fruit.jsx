import React from 'react'

export default function Fruit ({emoji, name, price}) {

  return (
    <div> {emoji} {name} {price}€ </div>
  )
}
