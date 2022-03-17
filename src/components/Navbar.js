import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import Balls from '../assets/Balls.png';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
     <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">      
       <div className="flex items-center flex-shrink-0 text-white mr-6">
       <span className="font-semibold text-xl tracking-tight"><Link to="/"><img className="fill-current h-8 w-8 mr-2 App-logo"  width="54" height="54" viewBox="0 0 54 54" src={Balls}></img>
       </Link></span>
       </div>
      
      {/* <div className="block lg:show">
         <Link to="/"> className="fill-current h-8 w-8 mr-2"
     <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menú</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
     </Link>
      </div> */}

      

<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
   <div className="text-sm lg:flex-grow">
      {isLoggedIn && (
        <>
          <Link to="/cards" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <button>Cards</button>
          </Link>
          <Link to="/cards/create" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <button>Create</button>
          </Link>
          <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <button>Profile</button>
          </Link>
          <span className="block mt-4 lg:inline-block lg:mt-0 text-orange-600 hover:text-white mr-4">{user && user.name}</span>
        </>
      )}
</div>
      {!isLoggedIn && (
        <>
          <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            {' '}
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            {' '}
            <button>Login</button>{' '}
          </Link>
        </>
      )}

    </div>  
    <div>
       <button onClick={logOutUser} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></button>
    </div>
    </nav>
  );
}

export default Navbar;