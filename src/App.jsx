import { BrowserRouter } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      {routes}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
