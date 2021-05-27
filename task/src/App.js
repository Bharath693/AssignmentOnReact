import './App.css';
import { BrowserRouter , Switch , Route} from 'react-router-dom'
import Admin from './Components/Admin'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Switch>
         <Route exact path="/admin" component={Admin} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
