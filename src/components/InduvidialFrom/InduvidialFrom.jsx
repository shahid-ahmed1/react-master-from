import React, { useEffect, useRef } from 'react';

const InduvidialFrom = () => {
    const namRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    useEffect(()=>{
        namRef.current.focus()
    },[])
    const handaleSubmit =(e)=>{
        e.preventDefault()
        console.log(namRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
             <form onSubmit={handaleSubmit}>
            <h4>Plese fillup the from</h4>
         <input ref={namRef} type="text" name='name' placeholder='Enter your name' /><br />
      <input ref={emailRef} type="email" name='email' placeholder='Enter your email'/><br />
        <input ref={passwordRef} type="password" name='password' placeholder='Enter your password'/><br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default InduvidialFrom;