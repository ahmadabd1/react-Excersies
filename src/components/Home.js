import React from 'react'
import Item from './Item'

export default function Home({store,shouldDiscount}) {

  return (
    <>
    Store
    {store.map((item,i) =>{
        return <Item  item={item} shouldDiscount={shouldDiscount} key={i}/>
    })}
    </>
  )
}