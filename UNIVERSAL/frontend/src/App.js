import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
  
    <div class="grid-container">
        <header className="row">
            <div>
                <a class="brand" href="/">Universal</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        
        <main>
        
           
          <Routes>
          <Route path='/product/:id' element={<ProductScreen/>} /> 
          <Route  path="/" element={<HomeScreen />}  exact/> 
          </Routes>
           
        </main>
        <footer class="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );

}

export default App;
