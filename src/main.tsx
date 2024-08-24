import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { USE_MOCK_DATA } from './constants';

async function deferRender() {
  if (USE_MOCK_DATA) {
    const { worker } = await import('./mocks/browser');
    return worker.start();
  }
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
});
