import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpolFrom from './components/SimpleFrom/SimpolFrom'
import StatefullFrom from './components/StatefullFrom/StatefullFrom'
import InduvidialFrom from './components/InduvidialFrom/InduvidialFrom'
import HookFrom from './components/HookFrom/HookFrom'
import ReuseableFrom from './components/ReuseableFrom/ReuseableFrom'
import Farther from './components/Father/Farther'

function App() {
  const handaleSubmit =(data)=>{
   console.log('sign up data',data)
    
}
const handleProfileUpdate=(data)=>{
  console.log('profile updated data',data)
}

  return (
    <>
      {/* <SimpolFrom></SimpolFrom> */}
      {/* <StatefullFrom></StatefullFrom> */}
      {/* <InduvidialFrom></InduvidialFrom> */}
      {/* <HookFrom></HookFrom> */}
      <ReuseableFrom fromTitle={'Sign Up'} handaleSubmit={handaleSubmit} 
      ></ReuseableFrom><div>
        <h1>Sign Up</h1>
        <p>Plese Sign Up right now</p>
      </div>
      <ReuseableFrom fromTitle={'Profile Update'} SubmitBtnText='Update' handaleSubmit={handleProfileUpdate}><div>
        <h1>Update your profile</h1>
        <p>Plese update Up right now</p>
      </div></ReuseableFrom>
     <Farther></Farther>
    </>
  )
}

export default App
