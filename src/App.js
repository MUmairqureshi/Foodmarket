import logo from './logo.svg';
import './App.css';
import { Aboutus } from './foodMarket/aboutUs/about_us'
import { Header } from './foodMarket/Layout/header'
import   Product_deatail  from './foodMarket/home/productdetail/index'
import { Home } from './foodMarket/home/index' 
// import { Provider } from 'react-redux'; 
// import store from './components/redux/store';
import { CartProvider } from 'use-shopping-cart'

function App() {

  return (
    <div className="App">
        
        <CartProvider
    mode="payment"
    cartMode="client-only"
 
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="USD"
    allowedCountries={['US', 'GB', 'CA']}
    billingAddressCollection={true}
  >
      <div>

        <Header />
        {/* <Product_deatail/> */}
{/* <YourComponent/> */}
        {/* <MyComponent/> */}





        <Home />

{/* <Product_deatail/> */}





        {/* <ProductSlider/> */}
        {/* <Aboutus/>
  <Contact_us/>
  <Product_deatail/>
  <Store/> */}

      </div>

      </CartProvider>,
    </div>
  );
}

export default App;
