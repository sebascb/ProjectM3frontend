import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import Balls from '../assets/Balls.png';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
     <nav className="flex items-center flex-start flex-wrap bg-gray-700 p-2">  
       <div className="flex items-center flex-shrink-0 text-white mr-0">
       <span className="font-semibold text-xl tracking-tight"><Link to="/"><img className="fill-current h-8 w-8 mr-2 App-logo"  width="54" height="54" viewBox="0 0 54 54" src={Balls}></img>
       </Link></span>
       </div>

<div className="inline-flex ">
   <div className="text-sm sm:flex-grow">
      {isLoggedIn && (
        <>
          <Link to="/cards" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-0">
            <button>Cards</button>
          </Link>
          <Link to="/cards/create" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-0">
            <button>Create</button>
          </Link>
          <Link to="/profile" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-0">
            <button>Profile</button>
          </Link>
          <span className="inline-flex items-center justify-center p-2 text-orange-600 hover:text-white mr-0">{user && user.name}</span>
        </>
      )}
</div>
      {!isLoggedIn && (
        <>
          <Link to="/signup" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-4">
            {' '}
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-4">
            {' '}
            <button>Login</button>{' '}
          </Link>
        </>
      )}

    </div>  
    <div>
       <button onClick={logOutUser} className="inline-flex items-center justify-center p-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mr-2 "><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></button>
    </div>
    </nav>
  );
}

export default Navbar;