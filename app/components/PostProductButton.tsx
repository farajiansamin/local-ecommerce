"use client"

import React, { ComponentProps } from 'react'
import { useFormStatus } from "react-dom";
import { useState } from 'react';

 
type FormSubmitButtonProbs={

  children : React.ReactNode,
  className ?: string,
  

} & ComponentProps <"button">


const PostProductButton = ({children, className,...props} :FormSubmitButtonProbs) => {

  const {pending}= useFormStatus();
  
  return (
    <button {...props} disabled={pending} type="submit" className={`btn btn-primary  ${className}`} > {pending && <span className="loading loading-dots loading-sm"/> }{children}</button>
  )
}

export default PostProductButton