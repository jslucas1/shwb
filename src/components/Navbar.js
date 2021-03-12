import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
//button import 
function Navbar() {
    //updates the state 
    const [click, setClick] = useState(false);
    //make a handle click function reverses the value of the click to get it to switch 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
   

    return (
        <>
           <nav className="navbar">
              <div className="navbar-container">
                 <Link to="/" className="navbar-logo">
                     StudentHeath App <i class="fas fa-poll"></i>
                 </Link>
                 
                 <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>                
           
            <ul className ={click ? 'nav-menu active' : 'nav-menu'}> 
        <li className='nav-item'>
     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home 
    </Link>
</li>
</ul>

                 </div>
              </div>
               </nav> 
        </>
    )
}

export default Navbar
