import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <BrowserRouter>
                <App />
                <Toaster />
            </BrowserRouter>
    </React.StrictMode>
)

