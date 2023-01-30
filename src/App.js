import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber/Navber';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Developers from './components/Developers/Developers';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Developers></Developers>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
