import { Routes,  Route } from 'react-router-dom';
import { RequireAuth } from './hooks/useRouter';
import Error404 from './pages/Error404';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Dashboard/Orders';
import Users from './pages/Dashboard/Users';
import Products from './pages/Dashboard/Products';
import Reviews from './pages/Dashboard/Reviews';
import Payments from './pages/Dashboard/Payments';
import SingleProduct from './pages/Shop/SingleProduct';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path={`/`} element={<Home />} />
        <Route exact path={`shop`} element={<Shop />} />
        <Route exact path={`shop/:id`} element={<SingleProduct />} />
        <Route path={`checkout`} element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route exect path={`dashboard`} element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route exact path={`orders`} element={<RequireAuth><Orders /></RequireAuth>} />
          <Route exact path={`products`} element={<RequireAuth><Products /></RequireAuth>} />
          <Route exact path={`reviews`} element={<RequireAuth><Reviews /></RequireAuth>} />
          <Route exact path={`payments`} element={<RequireAuth><Payments /></RequireAuth>} />
          <Route exact path={`users`} element={<RequireAuth><Users /></RequireAuth>} />
        </Route>
        <Route exact path={`login`} element={<Login />} />
        <Route exact path={`register`} element={<Register />} />
        <Route exact path={`*`} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
