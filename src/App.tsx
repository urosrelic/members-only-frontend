import { Route, Routes } from 'react-router';
import LoginPage from './pages/login-page/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
}
export default App;
