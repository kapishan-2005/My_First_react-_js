import './App.css';
import './css/animate.css';
import './css/fontawesome.css';
import './css/templatemo-tale-seo-agency.css';
import './css/owl.css';
import './css/flex-slider.css';
import Navbar from './components/navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/about';
import Faq from './pages/faq';
import Contact from './pages/contact';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;
