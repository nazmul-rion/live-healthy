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
import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/AppointmentPage/Appointment';

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
          <Route path="/about">
            <AboutUs />
          </Route>

          <PrivateRoute path="/serviceDetails/:id">
            <ServiceDetailsPage />
          </PrivateRoute>
          <Route path="/appointment">
            <Appointment />
          </Route>

          <Route path="*"><NotFound /></Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </BrowserRouter >

  );
}

export default App;
