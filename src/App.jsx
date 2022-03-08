import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import { AuthProviderWrapper } from './context/auth.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Protected from './pages/Protected';
import SignupPage from './pages/SignupPage';
import Cards from './pages/Cards';
import Detail from './pages/Detail';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protected"
          element={
            <IsPrivate>
              <Protected />
            </IsPrivate>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route path='/cards' element={< Cards />}/>
        <Route path='/cards/:id' element={< Detail />}/>
        <Route path="/cards/create" element={<Create />} />
        <Route path="/cards/:id/edit" element={<Edit />} />
        <Route path="/cards/:id/delete" element={<Delete />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
