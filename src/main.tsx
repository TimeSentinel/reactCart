import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import App from './App.tsx'
import {StrictMode} from "react";
import './index.css';
import Themes from "./modules/Themes";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Themes/>
            <App/>
            <Toaster/>
        </BrowserRouter>
    </StrictMode>
)

