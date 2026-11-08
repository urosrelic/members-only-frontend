import { Route, Routes } from 'react-router';
import LoginPage from './pages/login-page/LoginPage';
import SignupPage from './pages/signup-page/SignupPage.tsx';

function App() {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
