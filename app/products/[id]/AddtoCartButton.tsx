"client use"
import React from 'react'
interface AddtoCartButtonProps{

    productId: string

}

const AddtoCartButton = ({productId}:AddtoCartButtonProps) => {
  return (
    <div className =" flex items-center">
        <button className= "btn btn-primary" onClick ={() =>{}}> Add to cart</button>
    </div>
  )
}

export default AddtoCartButton