
import React, { ComponentProps } from 'react'
 
type PostProductButtonProbs={

  children : React.ReactNode,
  className ?: string,

} & ComponentProps <"button">

const PostProductButton = ({children, className} :PostProductButtonProbs) => {
  
  return (
    <button type="submit" className=" btn btn-primary btn-block"> {children}</button>
  )
}

export default PostProductButton