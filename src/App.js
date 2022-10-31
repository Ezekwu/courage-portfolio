import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyles } from './components/styles/GlobalStyles';
import Homepage from './pages/Homepage';
import Footer from './components/layout/Footer';
import Projectspage from './pages/Projects';
import Writing from './pages/Writing';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Socialverse from './pages/Socialverse';
import Decentrelon from './pages/Decentrelon';
import Foodie from './pages/Foodie';
import Giphy from './pages/Giphy';
import ScrollToTop from './components/layout/ScroolToTop';
import CustomCusor from './components/layout/CustomCusor';
function App() {
  return (
    <div className="App">
      <Router>
        <CustomCusor />
        <ScrollToTop />
        <GlobalStyles /> 
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/projects' element={<Projectspage />} />
          <Route path='/writing' element={<Writing />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/socialverse' element={<Socialverse />} />
          <Route path='/projects/decentrelon' element={<Decentrelon />} />
          <Route path='/projects/foodie' element={<Foodie />} />
          <Route path='/projects/giphy' element={<Giphy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
