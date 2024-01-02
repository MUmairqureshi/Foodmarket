import logo from './logo.svg';
import './App.css';
// import { Aboutus } from './foodMarket'
import { Header } from './foodMarket/Layout/header'
 
 
 import { Home } from './foodMarket/home/index' 
import { Provider } from 'react-redux'; 
import store from './components/redux/store';
import {Contact} from './foodMarket/Contact-us/contactus'
import {Rout} from './route/index'
 

function App() {
 


  return (
    <div className="App">
  <Provider store={store}>
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

    </div>
  );
}

export default App;
