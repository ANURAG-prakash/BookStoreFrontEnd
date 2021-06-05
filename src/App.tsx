import { BrowserRouter, Route, Link , Switch, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/loginSignupDashboard/loginsignupdashboard';
import BSDashboard from './pages/BookStoreDashboard/BookStoreDashBoard';
import Signup from '../src/components/signup/signup';
import Login from '../src/components/login/login';
import Wishlist from '../src/pages/WishList/WishList';
import Cart from '../src/pages/Cart/Cart';
import Last from '../src/pages/LastPage/Lastpage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path= "/LoginSignUp" component={Dashboard} />
      <Route exact path= "/Dashboard" component={BSDashboard} />
      <Route exact path= "/Signup" component={Signup} />
      <Route exact path= "/Login" component={Login} />
      <Route exact path ="/Wishlist" component={Wishlist}/>
      <Route exact path ="/Cart" component={Cart}/>
      <Route exact path ="/Last" component={Last}/>
    </Switch>
  </BrowserRouter>
   
  );
}

export default App;
