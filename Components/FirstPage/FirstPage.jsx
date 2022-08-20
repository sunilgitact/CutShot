import React from 'react'

const FirstPage = () => {
  return (
    <>

    

    <div className='FirstPage'>

    <h1 className='HeadingText'>Welcome! First things first...</h1>
    <p className='Semi-heading'>You can always change them later. </p>

    <div>

        <h3 id='FullName'>Full Name</h3>

        <input type="text" placeholder='Steve jobs' className='inp'/>

        <h3 id='DisplayName' >Display Name</h3>

        <input type="text" placeholder='Steve' className='inp'/> <br />  

        <button id='btn1'>Create Workspace</button>

    </div>

    </div>
    
    </>
  )
}

export default FirstPage