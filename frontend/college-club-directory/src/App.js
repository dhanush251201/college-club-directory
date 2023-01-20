import './App.css';

// import routes and route

import {Routes, Route} from 'react-router-dom'; 

// Import compenents
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import ClubDetails from './pages/ClubDetails'

const App = () => {
  return( 
    <div className='max-w-[1440px] mx-auto bg-white'>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clubs/:id' element={<ClubDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
