import { BrowserRouter, Route, Link , Switch, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/loginsignupdashboard';
import BSDashboard from './pages/BookStoreDashBoard';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path= "/LoginSignUp" component={Dashboard} />
      <Route exact path= "/Dashboard" component={BSDashboard} />
      
    </Switch>
  </BrowserRouter>
   
  );
}

export default App;
