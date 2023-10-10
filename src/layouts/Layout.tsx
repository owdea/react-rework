// Layout.jsx
import Navbar from './components/Navbar.tsx';

const Layout = ({ children }) => {
  const mainDivStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={mainDivStyle}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
