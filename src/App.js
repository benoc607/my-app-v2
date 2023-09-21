import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Navigation from './Components/Navigation/navigation';
import About from './Components/About/about';
import TheTeam from './Components/TheTeam/theTeam';
import Timetable from './Components/Timetable/timetable';
import Gallery from './Components/Gallery/gallery';
import ContactUs from './Components/ContactUs/contactUs';
import Footer from './Components/Footer/footer';
import ErrorBoundary from './Components/ErrorBoundaries/errorBoundaries';

function App() {
  return (
    <div className="Website">
      <ErrorBoundary>
        <Header />
        <Navigation />
        <About />
        <TheTeam />
        <Timetable />
        <Gallery />
        <ContactUs />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
