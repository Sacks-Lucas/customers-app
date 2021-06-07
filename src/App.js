import { Component } from 'react';
import { Switch , BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import CustomerContainer from './containers/CustomerContainer';
import CustomersContainer from './containers/CustomersContainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>
  
  render(){
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni}/>}/>
            <Route path="/customers" component={CustomersContainer}/>
            <Route exact path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
