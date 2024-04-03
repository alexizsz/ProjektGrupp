import './App.css';

import Footer from './components/Footer'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
 

  return (
    <div className='App'>
      <Navbar cartItemsCount={0}/>
      <HomePage/>
      <Footer/>
    </div>
    
  )
}

export default App;
