import './App.css';
import Header from './components/Header/header';
import Search from "./components/Search/search";
import Carousel from './components/Carousel/carousel';
import News from "./components/News/news";
import Schedule from "./components/Schedule/schedule";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Search /> 
      <Carousel />
      <News />
      <Schedule />
      <Footer/>
    </div>
  );
}

export default App;
