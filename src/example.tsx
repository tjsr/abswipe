import './examples.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Swiper } from './Swiper';
import reportWebVitals from './reportWebVitals';

export const doRender = () => {
  console.log('Rendering Swiper example');
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <p>Swiper sample component.</p>
          <a className="App-link" href="https://github.com/tjsr/abswipe" target="_blank" rel="noopener noreferrer">
            https://github.com/tjsr/abswipe
          </a>
        </header>
        <Swiper />
      </div>
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};
