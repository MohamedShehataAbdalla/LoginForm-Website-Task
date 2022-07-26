import { ThemeProvider } from './Context/ThemeContext';
import Header from './Layouts/Header/Header';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Assets/Styles/Main.css';
import Home from './Home';
import {AuthContext, AuthProvider} from './Context/AuthContext';
import { useContext } from 'react';

function App() {

  const authContext = useContext(AuthContext);

  return (
    <div className="">
      <ThemeProvider>
          <Header />
          { authContext.auth.email ? <Home /> : <Login />}
      </ThemeProvider>
    </div>
  );
}

function AppWithStore() {

  return (<AuthProvider>
    <App />
  </AuthProvider>);
}


export default AppWithStore;
