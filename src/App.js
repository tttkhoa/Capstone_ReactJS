import './App.scss'
import Header from './pages/header';
import Carousel from './pages/carousel';
import ListMovie from './pages/list-mosvie';
import Footer from './pages/footer';

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