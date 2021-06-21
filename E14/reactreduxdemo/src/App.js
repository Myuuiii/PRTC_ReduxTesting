import logo from './logo.svg';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import './App.css';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
