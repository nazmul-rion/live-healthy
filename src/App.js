import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Navigationbar from './pages/Navigationbar/Navigationbar';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import SigninPage from './pages/Login/SignInPage';
import SignUpPage from './pages/Login/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigationbar />
        <Switch>
          <PublicRoute exact path="/"><HomePage /></PublicRoute>
          <PublicRoute exact path="/home"><HomePage /></PublicRoute>
          <PublicRoute exact path="/signin"><SigninPage /></PublicRoute>
          <PublicRoute exact path="/signup"><SignUpPage /></PublicRoute>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter >

  );
}

export default App;
