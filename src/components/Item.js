import React from 'react'


export default function Item({item,shouldDiscount}) {
    
   const pricediscoun = item.price -(item.price*item.discount)
  return (
   <div>
    
   {shouldDiscount ? <div>{item.item} his price with discount : $ {pricediscoun}</div> :<div>{item.item} his price : $ {item.price}</div> } 
   </div>
  )
}
