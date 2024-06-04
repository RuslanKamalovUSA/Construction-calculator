import Main from '../pages/main';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Main></Main>
      </div>
    </Router>
  );
}

export default App;
