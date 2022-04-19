import {Routes, Route} from 'react-router-dom'
import { About } from './Components/About';
import { Admin } from './Components/Admin';
import { FeaturedProducts } from './Components/FeaturedProducts';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { NewProducts } from './Components/NewProducts';
import NoMatch from './Components/NoMatch';
import OrderSummary from './Components/OrderSummary';
import { Products } from './Components/Products';
import { UserDetails } from './Components/UserDetails';
import { Users } from './Components/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          {/* Nested dynamic routes */}
          <Route path=':userId' element={<UserDetails />} />
          {/* Fixed path has priority over dynamic route in react router */}
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
      
    </div>
  );
}

export default App;
