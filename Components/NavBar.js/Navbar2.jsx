import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{

  
    let contiune1 = document.getElementById('contiune1')
    let contiune2 = document.getElementById('contiune2')
    let contiune3 = document.getElementById('contiune3')

    
    function handlefun1() 
    {
        alert('Submitted')
        contiune1.style.backgroundColor='white'
        contiune2.style.backgroundColor='white'
        contiune3.style.backgroundColor='white'
        
    }


    function handlefun2() 
    {
        alert('Submitted')
        contiune1.style.backgroundColor='blue'
        contiune2.style.backgroundColor='white'
        contiune3.style.backgroundColor='white'
        
    }

    function handlefun3() 
    {
        alert('ahi')
        contiune1.style.transitionDelay='6s'
        contiune1.style.backgroundColor='blue'
        contiune2.style.backgroundColor='blue'
        contiune3.style.backgroundColor='white'     
    }


    function handlefun4() 
    {
        alert('Congralations!')
        contiune1.style.backgroundColor='blue'
        contiune2.style.backgroundColor='blue'
        contiune3.style.backgroundColor='blue'
        
    }


    let stylethetext=({isActive})=>{
        return(
            {fontWeight: isActive ? "bold":"normal",
            textDecoration: isActive ? "underline":"none"}
        )
    }
    return(

      <>
      <div className="flex-box">
      <div id="Line">
      </div>
        <nav id="Main-Nav">
            <NavLink style={stylethetext} to = "/FirstPage" > <span id="links" onClick={handlefun1}>1</span></NavLink><br/> <span id="contiune1"></span>
            <NavLink style={stylethetext} to ="/SecoundPage" ><span id="links" className="links" onClick={handlefun2}>2</span></NavLink><br /> <span id="contiune2"></span>
            <NavLink style={stylethetext} to ="/ThirdPage"  ><span id="links" className="links" onClick={handlefun3}>3</span></NavLink><br /> <span id="contiune3"></span>
            <NavLink style={stylethetext} to ="/LastPage" ><span id="links" className="links" onClick={handlefun4}>4</span></NavLink><br/>   
        </nav>
        </div>
        </>
    )
}
export default Navbar;