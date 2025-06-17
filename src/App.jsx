import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
// import Services from './pages/services/Services';
// import Audios from './pages/services/Audios';
// import Videos from './pages/services/Videos';
import Clients from './pages/Clients';
import Albums from './pages/Albums';
import Contacts from './pages/Contacts';
import FAQs from './pages/FAQs';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/services/audio" element={<Audios />} /> */}
          {/* <Route path="/services/video" element={<Videos />} /> */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
