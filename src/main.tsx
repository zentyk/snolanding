import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const whatsappButton = document.getElementById('buttonx');
if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/+525538903746', '_blank');
  });
}

const closeButton = document.getElementById('close-popup');
if (closeButton) {
  closeButton.addEventListener('click', () => {
    const modal = document.getElementById('popup');
    if (modal) {
      modal.style.display = 'none';
    }
  });
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
