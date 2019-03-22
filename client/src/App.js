import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from "./components/AppNavbar"
import ShoppingList from "./components/ShoppingList.js"
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal';
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
      <Provider store={store}>
      <div className="App">
      <AppNavbar/>
      <ItemModal/>
      <ShoppingList/>
      </div>
      </Provider>
      </Container>
    );
  }
}

export default App;
