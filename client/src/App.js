import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/itemModal';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          <Container>
            <h1>Hello</h1>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
