import React, { useState } from 'react';

const StatefullFrom = () => {
    const [name ,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState('')
    
    const handleSubmit =e=>{
        e.preventDefault()
         if(password.langth < 6){
            setError('plese paswoed minimum 6 dizit')
            console.log('errror')
          }
          else{
            setError('')
            console.log(name,email,password);
          }
        
        
        
    }
    const handleNameChange=e=>{
        setName(e.target.value)
   }
    const handleEmailChange = e =>{
     
     setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
     
     setPassword(e.target.value)
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <h4>Plese fillup the from</h4>
                <input type="text" name='name' placeholder='Enter your name' onChange={handleNameChange} /><br />
                <input type="email" name='email' onChange={handleEmailChange} placeholder='Enter your email'/><br />
                <input type="password" name='password' placeholder='Enter your password' onChange={handlePasswordChange} required/><br />
                <button>submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullFrom;