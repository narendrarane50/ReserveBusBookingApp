import './App.css';
import {Route,Routes} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/Home_Page';
import AvailableBusPage from './Pages/Available_bus_page';

function App() {
  return (
    <div className="App">
      <Header />
      <main >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/availablebus' element={<AvailableBusPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
