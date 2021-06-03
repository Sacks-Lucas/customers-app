import { Component } from 'react';
import { Switch , BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderCustomerListContainer = () => <h1>Customer List Container</h1>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>
  
  render(){
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:dni" component={this.renderCustomerListContainer}/>
            <Route path="/customers" component={CustomersContainer}/>
            <Route path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
