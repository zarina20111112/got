import React from 'react';



const User = (props) => {
    return (
        <div className='contanier' >
            <div className='div' >
                <img src='/images 8.png' alt="" />
                 <h3>{props?.name}</h3>
                <p>{props?.titel}</p>
            </div>
        </div>
    ); 
}
    
export default User;
