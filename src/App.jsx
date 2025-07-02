import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Albums from './pages/Albums';
import Contacts from './pages/Contacts';
import FAQs from './pages/FAQs';
import Artists from './pages/Artists';
import Services from './pages/Services';
import Products from './pages/Products';
import AudioServices from './pages/services/AudioServices';
import VideoServices from './pages/services/VideoServices';
import PageWrapper from './components/PageWrapper';

// Audio Services
import MusicLabel from './pages/services/audios/MusicLabel';
import SongDistribution from './pages/services/audios/SongDistribution';
import RecordingStudio from './pages/services/audios/RecordingStudio';
import OnSetSyncSound from './pages/services/audios/OnSetSyncSound';
import MusicProduction from './pages/services/audios/Music Production';

// Video Services
import EquipmentHiring from './pages/services/videos/EquipmentHiring';
import VideoShooting from './pages/services/videos/VideoShooting';
import ArtistCoordination from './pages/services/videos/ArtistCoordination';
import Locations from './pages/services/videos/Locations';
import EditingPost from './pages/services/videos/EditingPost';
import GraphicsVFX from './pages/services/videos/GraphicsVFX';

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
              <Home />
            </PageWrapper>
          }
        />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/clients" element={<PageWrapper><Clients /></PageWrapper>} />
        <Route path="/albums" element={<PageWrapper><Albums /></PageWrapper>} />
        <Route path="/artists" element={<PageWrapper><Artists /></PageWrapper>} />
        <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
        <Route path="/faqs" element={<PageWrapper><FAQs /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/services/audio" element={<PageWrapper><AudioServices /></PageWrapper>} />
        <Route path="/services/video" element={<PageWrapper><VideoServices /></PageWrapper>} />
        
        {/* Audio Services Routes */}
        <Route path="/services/audio/music-label" element={<PageWrapper><MusicLabel /></PageWrapper>} />
        <Route path="/services/audio/song-distribution" element={<PageWrapper><SongDistribution /></PageWrapper>} />
        <Route path="/services/audio/recording-studio" element={<PageWrapper><RecordingStudio /></PageWrapper>} />
        <Route path="/services/audio/on-set-sync-sound" element={<PageWrapper><OnSetSyncSound /></PageWrapper>} />
        <Route path="/services/audio/music-production" element={<PageWrapper><MusicProduction /></PageWrapper>} />
        
        {/* Video Services Routes */}
        <Route path="/services/video/equipment-hiring" element={<PageWrapper><EquipmentHiring /></PageWrapper>} />
        <Route path="/services/video/video-shooting" element={<PageWrapper><VideoShooting /></PageWrapper>} />
        <Route path="/services/video/artist-coordination" element={<PageWrapper><ArtistCoordination /></PageWrapper>} />
        <Route path="/services/video/locations" element={<PageWrapper><Locations /></PageWrapper>} />
        <Route path="/services/video/editing-post" element={<PageWrapper><EditingPost /></PageWrapper>} />
        <Route path="/services/video/graphics-vfx" element={<PageWrapper><GraphicsVFX /></PageWrapper>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
