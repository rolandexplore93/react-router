import {Routes, Route} from 'react-router-dom'
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import NoMatch from './Components/NoMatch';
import OrderSummary from './Components/OrderSummary';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      
    </div>
  );
}

export default App;
