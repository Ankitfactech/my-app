import React from 'react';
import './App.css';
import ImageCropper from './components/ImageCropper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Cropper Demo</h1>
        <ImageCropper />
      </header>
    </div>
  );
}

export default App;
