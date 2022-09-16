import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReviewContextProvider } from './contexts/ReviewContext';
import FirebaseAuthProvider from './contexts/FirebaseAuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <ReviewContextProvider>
        <App />
      </ReviewContextProvider>
    </FirebaseAuthProvider>
  </React.StrictMode>
);
