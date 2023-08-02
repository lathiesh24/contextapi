import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (

   <div className="App"> 
   <Header/>
     <Routes>
       <Route exact path="/"  element={<Home/>}/>
       <Route path="/cart"  element={<Cart/>}/>
     </Routes>
   </div>      
  );
}

export default App;
