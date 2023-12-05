import logo from './logo.svg';
import './App.css';
import { Aboutus } from './foodMarket/aboutUs/about_us'
import { Header } from './foodMarket/Layout/header'
import   Product_deatail  from './foodMarket/home/productdetail/index'
import { Home } from './foodMarket/home/index' 
import { Provider } from 'react-redux'; 
import store from './components/redux/store';
function App() {

  return (
    <div className="App">
        

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

          
    </div>
  );
}

export default App;
