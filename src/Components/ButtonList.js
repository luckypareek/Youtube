import React from 'react'
import Button from "./Button"

const ButtonList = () => {
  const names=["All","Trending","Gaming","Cricket","Football","Live","News","Cooking","Food","Comedy"]
  return (
    <div className='flex'>
      {names.map((name,index)=><Button key={index} name={name}/>)}

    





    </div>
  )
}

export default ButtonList