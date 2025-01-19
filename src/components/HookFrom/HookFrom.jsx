import React from 'react';
import useInputState from '../../Hooks/useInputFrom';

const HookFrom = () => {

     const emailState = useInputState('umayeraddeb@fmail.com')
    const nameState =useInputState('Rojoni')
    const handaleSubmit=e=>{
        e.preventDefault()
        console.log('from data',nameState.value)
        console.log('from data',emailState.value)
    }
    return (
        <div>
             <form onSubmit={handaleSubmit}>
                <h4>Plese fillup the from</h4>
                <input {...nameState} type="text" name='name' placeholder='Enter your name' /><br />
                <input {...emailState} type="email" name='email' placeholder='Enter your email'/><br />
                <input type="password" name='password' placeholder='Enter your password'/><br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default HookFrom;