import { BrowserRouter, Route, Link , Switch, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/loginSignupDashboard/loginsignupdashboard';
import BSDashboard from './pages/BookStoreDashboard/BookStoreDashBoard';
import Signup from '../src/components/signup/signup';
import Login from '../src/components/login/login';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path= "/LoginSignUp" component={Dashboard} />
      <Route exact path= "/Dashboard" component={BSDashboard} />
      <Route exact path= "/Signup" component={Signup} />
      <Route exact path= "/Login" component={Login} />
    </Switch>
  </BrowserRouter>
   
  );
}

export default App;
