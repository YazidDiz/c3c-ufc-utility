import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@fontsource/roboto';
import 'mdui/mdui.css';
import 'mdui';

import "./index.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
        <div className="credit-footer">
            By Zetsu / Yazid &mdash; 
            <a href="https://www.facebook.com/profile.php?id=61576203489525" target="_blank" rel="noopener noreferrer">
                Facebook
            </a>
        </div>
    </React.StrictMode>
)
