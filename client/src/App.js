import Home from "./pages/Home.js";
import Login from "./pages/Login";
import { Switch, Route } from 'react-router'
import Test from "./pages/test.js";
import Footer from "./Components/Footer.js";
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js"
import Register from "./pages/Register.js"; 
import AdminUpdateProduct from "./pages/AdminUpdateProduct.js";
import AdminAddProduct from "./pages/AdminAddProduct.js";
import Success from "./pages/Success.js";
import ProductList from "./pages/ProductList";
import Map from "./Components/Map";



function App() {

  return (
    <>

      <Switch>
        <Route path="/admin/update/:id">
          <AdminUpdateProduct/>
        </Route>
        <Route path="/admin/add">
          <AdminAddProduct/>
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/test-logout ">
          <Test/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/map">
          <Map/>
        </Route>
      </Switch>
      <Footer/>

      
    </>
  );
}

export default App;
