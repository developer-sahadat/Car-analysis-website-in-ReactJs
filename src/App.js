import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Dashboards from './Components/Dashboards/Dashboards';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/dashboard' element={<Dashboards/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
