import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyles } from './components/styles/GlobalStyles';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
