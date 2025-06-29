import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import History from './pages/History';
import Gallery from './pages/Gallery';
import Map from './pages/Map';
import About from './pages/About';

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
          })
          .catch((error) => {
            console.log('Error al registrar el Service Worker:', error);
          });
      });
    }

    // Online/offline detection
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // PWA installation
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 76+ from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
    });

    // Check if app is already installed
    window.addEventListener('appinstalled', () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
      console.log('PWA was installed');
    });

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    
    // We no longer need the prompt. Clear it.
    setDeferredPrompt(null);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {!isOnline && (
          <div className="bg-yellow-500 text-white text-center py-2">
            Estás en modo sin conexión. Algunas funciones pueden estar limitadas.
          </div>
        )}
        
        <Header />
        
        {!isAppInstalled && deferredPrompt && (
          <div className="bg-blue-500 text-white text-center py-2 flex justify-between items-center px-4">
            <span>Instala esta aplicación para una mejor experiencia</span>
            <button 
              onClick={handleInstallClick}
              className="bg-white text-blue-500 px-4 py-1 rounded-full font-medium"
            >
              Instalar
            </button>
          </div>
        )}
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atracciones" element={<Attractions />} />
            <Route path="/historia" element={<History />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/acerca" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;