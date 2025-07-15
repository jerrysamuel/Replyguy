import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../features/landing/landing';
import Signup from '../features/auth/SignUp'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/:role" element={<Signup />} />
        {/* Add more routes like /dashboard, /chat, etc */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
