import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import Balls from '../assets/Balls.png';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
     <nav className="flex items-center flex-start flex-wrap bg-gray-700 p-3">  
       <div className="flex items-center flex-shrink-0 text-white mr-0">
       <span className="font-semibold text-xl tracking-tight"><Link to="/"><img className="fill-current h-9 w-9 mr-6 App-logo"  width="54" height="54" viewBox="0 0 54 54" src={Balls}></img>
       </Link></span>
       </div>

<div className="inline-flex ">
   <div className="text-sm sm:flex-grow">
      {isLoggedIn && (
        <>
          <Link to="/cards" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-2">
            <button><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
</svg></button>
          </Link>
          <Link to="/cards/create" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-2">
            <button><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path   d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
          </Link>
          <Link to="/profile" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-2">
            <button><svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
          </Link>
          <span className="inline-flex align-top mt-2 p-2 text-orange-600 hover:text-white mr-4">{user && user.name}</span>
        </>
      )}
</div>
      {!isLoggedIn && (
        <>
          <Link to="/signup" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white ml-8 mr-4">
            {' '}
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center p-2 text-teal-200 hover:text-white mr-12">
            {' '}
            <button>Login</button>{' '}
          </Link>
        </>
      )}

    </div>  
    <div className='mr-0'>
       <button onClick={logOutUser} className="inline-flex items-center justify-center p-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white ml-10 "><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></button>
    </div>
    </nav>
  );
}

export default Navbar;