import React from 'react'


export default function Landing({data}) {
    const theHottest=function(){
        return data.store.find(ele => ele.hottest === true)
    }
    const hote = theHottest()

  return (
    <div>
        Welcome {data.user} . hottest {hote.item} for $ {hote.price}
    </div>
  )
}
