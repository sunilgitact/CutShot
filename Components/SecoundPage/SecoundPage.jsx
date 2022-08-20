import React from 'react'

const SecoundPage = () => {
  return (
    <>

<div className='SecoundPage'>

<h1 className='HeadingText'>Let's set up a home for  all your work</h1>
<p className='Semi-heading'>You can always change them later. </p>

<div id='inps'>

    <h3 id='WorkspaceName'>Workspace Name</h3>

    <input type="text" placeholder='Eden' className='inp'/>

    <h3 id='DisplayName' >Workspace URL <span>optional</span></h3>

    <input type="text" placeholder='www.eden.com/ ' className='inp'/> <br />  

    <button id='btn1'>Create Workspace</button>

</div>

</div>
    </>
  )
}

export default SecoundPage