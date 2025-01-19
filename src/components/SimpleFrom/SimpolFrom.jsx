import React from 'react';

const SimpolFrom = () => {
    const handaleSubmit =(e)=>{
        e.preventDefault()
        console.log('from submited');
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        
    }
    return (
        <div>
            <form onSubmit={handaleSubmit}>
                <h4>Plese fillup the from</h4>
                <input type="text" name='name' placeholder='Enter your name' /><br />
                <input type="email" name='email' placeholder='Enter your emailn'/><br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default SimpolFrom;