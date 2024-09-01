import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const MainLayout = () => {
  const location = useLocation();
  
  // Check if the current route is '/container'
  const isContainerPage = location.pathname === '/container';
  
  return (
    <div>
      {/* Conditionally render the header and footer */}
      {!isContainerPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isContainerPage && <Footer />}
    </div>
  );
};

export default MainLayout;