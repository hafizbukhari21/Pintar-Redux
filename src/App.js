import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import MainReducers from './Store/MainStore'
import View from './View'

const MainStore = createStore(MainReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store = {MainStore}>
      <View/>
    </Provider>
    
  );
}

export default App;
