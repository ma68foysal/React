import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const navLink =
  "text-center md:px-4  py-3 inline-block text-white text-lg uppercase";

function NavBar({loggedInUser}) {
    const migrate = useNavigate()

    function handleLogOut(){
        sessionStorage.removeItem('user')
        migrate("./login")
    }
  return (

        <nav style={{ backgroundColor: "black" }} className="sticky top-0 z-50">

        <div className="conainer mx-auto px-4 flex flex-col md:flex-row  justify-start md:justify-between md:items-center">
        <div className="flex justify-between w-full">
            <Link
            to="/"
            className="py-1 inline-block text-white text-lg uppercase"
            >
            Clever Learner
            </Link>
        </div>

        <ul className="md:flex flex-col md:flex-row items-center justify-center transition">
            <>
            
                <>
                {loggedInUser && ( <>
                <li className="">
                    <Link className={navLink} to={`/dashboard`}>
                    Dashboard
                    </Link>
                </li>
                <li className="">
                     <Link to='/quize/add' className={navLink} >
                    AddQuize
                    </Link>
                </li>
                </>
                )}
               
                <li className="">
                    <Link className={navLink} to={`/users`}>
                    Users
                    </Link>
                </li>
                </>
            
            </>
            {
                loggedInUser ?(<li className="">
                <button className={navLink} onClick={handleLogOut} >
                Logout
                </button>
            </li>):(  <li className="">
                <button className={navLink}>
                <Link to="/login">Login</Link>
                </button>
            </li>)
            }
           
            
           
          
           
        </ul>
        </div>
        </nav>

  )
}

export default NavBar