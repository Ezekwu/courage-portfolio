import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyles } from './components/styles/GlobalStyles';
import Homepage from './pages/Homepage';
import Footer from './components/layout/Footer';
import Projectspage from './pages/Projects';
import Writing from './pages/Writing';
import Aboutme from './pages/Aboutme';
function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/projects' element={<Projectspage />} />
          <Route path='/writing' element={<Writing />} />
          <Route path='/aboutme' element={<Aboutme />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
