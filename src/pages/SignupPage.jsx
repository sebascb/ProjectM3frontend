import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { signup } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleName = e => setName(e.target.value);

  const handleSignupSubmit = e => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state``
    signup(requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <div className="title-login">
        <h2 className='letter-login'>Sign Up</h2>
      </div>

      <div>
        <form onSubmit={handleSignupSubmit}>
          <label className='label-login'>Email:</label>
          <input className='input-login' type="email" name="email" value={email} onChange={handleEmail} placeholder="Include your email" />

          <label className='label-login'>Password:</label>
          <div className='inputEye'>
            <input className='input-login' type={passwordShown ? "text" : "password"} name="password" value={password} onChange={handlePassword} placeholder="Include uppercase and number" />
          </div>
          
          <label className='label-login'>Name:</label>
          <input className='input-login' type="text" name="name" value={name} onChange={handleName} placeholder="Include your user name" />
          <div className='cont-button-login'>
            <button className='button-login' type="submit">Sign Up</button>
          </div>
        </form>
        
        <div className='have-account'>
          <div className='inputEye'>
            <button className='eye' onClick={togglePassword}>👁️‍🗨️</button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Already have account?</p>
          <Link to={'/login'}> Login</Link>
        </div>
      </div>
    </div >
  );
}

export default SignupPage;
