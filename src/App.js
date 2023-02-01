import './App.css';
import Header from './components/Header/header';
import Carousel from './components/Carousel/carousel';
import ListMovie from './components/ListMovie/list-mosvie';
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ListMovie />
      <Footer/>
    </div>
  );
}

export default App;
