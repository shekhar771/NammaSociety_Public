import React from 'react'
import '../Css/MainScreen.css'
const MainScreen = () =>{
  return (
    <div className='MainScrBx' >
        <div className='SocSection'>
            <text className='Maintxt'>
                Empowering Society , Simplifying Lives
            </text>
            <text className='Subtxt'>
            Your All-in-One Solution for Effortless Society Account Management
            </text>
            <button className='contactBtn'>
                Contact Us
            </button>
        </div>
        <div className='FeatureSect'>
            <div className='Row'>
            <div className='ImgBox'><text className='InBoxtxt'>CLOUD BASED ACCOUNTING SERVICES</text></div>
            <div className='ImgBox'><text className='InBoxtxt'>CLOUD BASED ACCOUNTING SERVICES</text></div></div>
            <div  className='Row'>
            <div className='ImgBox'>
            <text className='InBoxtxt'>CLOUD BASED ACCOUNTING SERVICES</text></div>
            <div className='ImgBox'><text className='InBoxtxt'>CLOUD BASED ACCOUNTING SERVICES</text></div>
            </div>
        </div>
        <div className='FeatureSect'>
        </div>
    </div>
  )
}


export default MainScreen ; 