import React from 'react'
import '../Css/SubHeader.css' 
import { IoTriangleOutline } from "react-icons/io5";
const SubHeader = ({barname , openStatus}) => {

  return (
    <div className='SubHeadCont'>
      <text className='SubHeadtxt'>{barname}</text>
      <div className='arrow'>{
        openStatus === true ?(<IoTriangleOutline style={{transform:'rotate(90deg)'}}/>):(<IoTriangleOutline style={{transform:'rotate(180deg)'}}/>) 
      }
      </div>
    </div>
  )
}

export default SubHeader
