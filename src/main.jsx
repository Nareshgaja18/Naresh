import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </StrictMode>,
)


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css'; // Import CSS for styling
// import { Provider } from 'react-redux';
// import store from './store.js'; // Import Redux store

// // Render the App component wrapped with the Redux Provider
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );
