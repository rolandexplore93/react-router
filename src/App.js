import {Routes, Route} from 'react-router-dom'
import { About } from './Components/About';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
