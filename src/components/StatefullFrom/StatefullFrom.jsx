import React, { useState } from 'react';

const StatefullFrom = () => {
    const [email,setEmail]=useState(null)
    const handleSubmit =e=>{
        e.preventDefault()
        console.log(email)
        


    }
    const handleEmailChange = e =>{
     
     setEmail(e.target.value)
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <h4>Plese fillup the from</h4>
                <input type="text" name='name' placeholder='Enter your name' /><br />
                <input type="email" name='email' onChange={handleEmailChange} placeholder='Enter your email'/><br />
                <input type="password" name='password' placeholder='Enter your password'/><br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default StatefullFrom;