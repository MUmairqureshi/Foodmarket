import logo from './logo.svg';
import './App.css';
// import { Aboutus } from './foodMarket'
import { Header } from './foodMarket/Layout/header'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import   Product_deatail  from './foodMarket/home/productdetail/index'
import { Home } from './foodMarket/home/index' 
import { Provider } from 'react-redux'; 
import store from './components/redux/store';
import {Contact} from './foodMarket/Contact-us/contactus'
import {Rout} from './route/index'
 

function App() {
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


  return (
    <div className="App">
    <Elements stripe={stripePromise}>       <Provider store={store}>
      <div>
      {/* <Contact/> */}
        {/* <Header /> */}
        {/* <Product_deatail/> */}
{/* <YourComponent/> */}
        {/* <MyComponent/> */}




<Rout/>
        {/* <Home /> */}

{/* <Product_deatail/> */}





        {/* <ProductSlider/> */}
        {/* <Aboutus/>
 
  <Product_deatail/>
  <Store/> */}

      </div>

      </Provider>,
      </Elements>

    </div>
  );
}

export default App;
