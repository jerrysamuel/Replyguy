import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../features/landing/landing';
import Signup from '../features/auth/SignUp'; 
import Signin from '../features/auth/SignIn';
import Profile from '../features/profile/Profile'; 
import ChatContainer from '../features/chat/ChatContainer';
import DashboardLayout from '../features/dashboard/Employer/DashboardLayout.jsx'; 
import ReplyGuyDashboard from '../features/dashboard/ReplyGuy/DashboardLayout.jsx';
import NotFound from '../features/landing/NotFound.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile isOwnProfile={true} />} />
        <Route path="/users/:id" element={<Profile isOwnProfile={false} role="employer" />} />
        <Route path="/dashboard/employer" element={<DashboardLayout />} />
        <Route path="/dashboard/replyguy" element={<ReplyGuyDashboard />} />
        <Route path="/profile" element={<Profile isOwnProfile={true} />} />

        <Route path="/chat" element={<ChatContainer />} />
        <Route path="*" element={<NotFound />} />
        {/* Add more routes like /dashboard, /chat, etc */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
