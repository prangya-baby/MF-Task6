import React from 'react';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Photo Gallery</h1>
        </div>
      </header>
      <main>
        <PhotoGallery />
      </main>
    </div>
  );
}

export default App;
