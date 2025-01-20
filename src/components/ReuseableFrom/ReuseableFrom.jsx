import React from 'react';

const ReuseableFrom = ({fromTitle,SubmitBtnText='Submit',handaleSubmit,children}) => {

   const handleLocalSubmit = e =>{
    e.preventDefault();
    const data ={
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value

    }
handaleSubmit(data)
   }
    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                <h4>{children}</h4>
                <input type="text" name='name' placeholder='Enter your name' /><br />
                <input type="email" name='email' placeholder='Enter your email'/><br />
                <input type="password" name='password' placeholder='Enter your password'/><br />
                <button>{SubmitBtnText}</button>
            </form> 
        </div>
    );
};

export default ReuseableFrom;