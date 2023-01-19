import React from 'react'
import img from './logo.svg'



const component = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand " href="#">
                    <img className='logo-width' src={img} alt="" />
    </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Template</a>
          </li>
          <li classNmae="nav-item">
            <a className="nav-link " aria-current="page" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Pricing</a>
          </li>
          
        </ul>
        <a classNmae="nav__btn__secondary" href="#">sign in</a>
        <a className="nav__btn" href="#">Start Free</a>
        
      </div>
    </div>
  </nav>
  )
}

export default component