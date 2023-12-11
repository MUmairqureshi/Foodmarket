import logo from './logo.svg';
import './App.css';
import { Aboutus } from './foodMarket/aboutUs/about_us'
import { Header } from './foodMarket/Layout/header'
import   Product_deatail  from './foodMarket/home/productdetail/index'
import { Home } from './foodMarket/home/index' 
import { Provider } from 'react-redux'; 
import store from './components/redux/store';

import {Rout} from './route/index'
function App() {

  return (
    <div className="App">
       <Provider store={store}>
      <div>

        {/* <Header /> */}
        {/* <Product_deatail/> */}
{/* <YourComponent/> */}
        {/* <MyComponent/> */}




<Rout/>
        {/* <Home /> */}

{/* <Product_deatail/> */}





        {/* <ProductSlider/> */}
        {/* <Aboutus/>
  <Contact_us/>
  <Product_deatail/>
  <Store/> */}

      </div>

      </Provider>,
    </div>
  );
}

export default App;
