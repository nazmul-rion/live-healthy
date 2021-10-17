import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Navigationbar from './pages/Navigationbar/Navigationbar';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigationbar />
        <Switch>
          <PublicRoute exact path="/"><Home /></PublicRoute>
          <PublicRoute exact path="/home"><Home /></PublicRoute>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter >

  );
}

export default App;
