import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate';
import Detail from './components/Detail';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path = '/' component = {LandingPage}/>
       <Route exact path = '/home' component = {Home}/>
       <Route path = '/pokemon' component = {PokemonCreate}/>
       <Route path = '/details/:id' component={Detail}/>
     </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
