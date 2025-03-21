import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './componets/Nav';
const container = document.getElementById('root-remote');

if (!container) {
  throw new Error('Root container element not found');
}
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);