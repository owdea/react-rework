// Layout.jsx
import Navbar from './components/Navbar.tsx';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
