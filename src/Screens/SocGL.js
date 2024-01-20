import React from 'react'
import '../Css/SocGL.css'
import SubHeader from '../Components/SubHeader';
const SocGL = () => {
    const [assets,setAssets] = React.useState(false)
    const [liability,setLiability] = React.useState(false)
    const [income,setIncome] = React.useState(false)
    const [expanditure,setExpanditure] = React.useState(false)
    const [assetTbale, setAtable] = React.useState('block')


    const handleAssets =()=>{
      if (assets === true)
      {setAssets(false);setAtable('none') } 
      else{setAssets(true); setAtable('block')}}
    const handleLiability=()=>{
      if (liability === true){setLiability(false)} 
      else{setLiability(true)}}
    const handleIncome =()=>{
      if (income === true){setIncome(false) } 
      else{setIncome(true)}}
    const handleExpand =()=>{
      if (expanditure === true){setExpanditure(false) } 
      else{setExpanditure(true)}}
  
    
  return (
    <div className='GLContainer'>
      <text>breadcrumb</text>
      <text className='pgTitle'>SOCIETY Gls</text>
      <div className='selectBtn' onClick={handleAssets} ><SubHeader  barname ={"Assets"} openStatus = {assets}/></div>
      <div style={{width:"100%", height:"10%", display: assetTbale, }}>

      </div>
      <div className='selectBtn' onClick={handleLiability}><SubHeader barname ={"Liability"} openStatus = {liability}/></div>
      <div className='selectBtn' onClick={handleIncome}><SubHeader  barname ={"Income"}  openStatus = {income}/></div>
      <div className='selectBtn' onClick={handleExpand}><SubHeader  barname ={"Expanditure"} openStatus = {expanditure}/></div>
    </div>
  )
}

export default SocGL