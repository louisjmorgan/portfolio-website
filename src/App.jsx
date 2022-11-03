import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ScrollToTop from './Components/Util/ScrollToTop';
import theme from './theme';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { Nav } from './Components/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router>
        <Nav />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
