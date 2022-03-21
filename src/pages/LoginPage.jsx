import { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password };

    login(requestBody)
      .then(() => {
        navigate('/');
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
      <div className='title-login'>
        <h2 className='letter-login'>Login</h2>
      </div>

      <form onSubmit={handleLoginSubmit}>
        <label className='label-login'>Email:</label>
        <input className='input-login' type="email" name="email" value={email} onChange={handleEmail} placeholder="Include your email"/>

        <label className='label-login'>Password:</label>
        <input className='input-login' type={passwordShown ? "text" : "password"} name="password" value={password} onChange={handlePassword} placeholder="Include uppercase and number" />
          
        <div className='cont-button-login'>
        <button className='button-login' type="submit">Login</button>
        </div>
      </form>
      
      <div className='have-account'>
        <div className='inputEye'>
          <button className='eye' onClick={togglePassword}>👁️</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Dont have an account yet?</p>
        <Link to={'/signup'}> Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
