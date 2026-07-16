import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@createchs/tokens/tokens.css'; // custom properties + @font-face (self-hosted)
import '@createchs/ui/styles.css';
import './docs.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
