import {Routes, Route} from 'react-router-dom'
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
