import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Navigationbar from './pages/Navigationbar/Navigationbar';
import SigninPage from './pages/Authentication/SignInPage';
import SignUpPage from './pages/Authentication/SignUpPage';
import PrivateRoute from './routes/PrivateRoute';
import ServiceDetailsPage from './pages/ServiceDetailsPage/ServiceDetailsPage';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigationbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home"><HomePage /></Route>
          <Route path="/signin"><SigninPage /></Route>
          <Route path="/signup"><SignUpPage /></Route>

          <PrivateRoute path="/serviceDetails">
            <ServiceDetailsPage />
          </PrivateRoute>

          <PrivateRoute path="/appointment">
            <ServiceDetailsPage />
          </PrivateRoute>

          <Route path="*"><NotFound /></Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </BrowserRouter >

  );
}

export default App;
