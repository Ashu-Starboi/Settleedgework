import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

console.log('SettleEdge: Initializing React app...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');
  
  createRoot(rootElement).render(<App/>);
  console.log('SettleEdge: React app rendered successfully.');
} catch (error) {
  console.error('SettleEdge: Initialization failed:', error);
  const errorDisplay = document.getElementById('error-display');
  const errorMessage = document.getElementById('error-message');
  const status = document.getElementById('loading-status');
  if (errorDisplay && errorMessage && status) {
    status.innerText = 'Initialization failed.';
    errorDisplay.style.display = 'block';
    errorMessage.innerText = error instanceof Error ? error.stack || error.message : String(error);
  }
}
