import React, { useState } from 'react';
import Nav from './componets/Nav';
import { HeroSection } from './routes/HeroSection';
import { Articles } from './routes/Articles';
import { Footer } from './routes/Footer';


const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav search={search} setSearch={setSearch} />
      <HeroSection />
      <Articles search={search}/>
      <Footer />
    </div>
  );
}

export default App;