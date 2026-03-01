import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { appStore } from './store/appStore';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import App from './App';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Provider store={appStore}>
         <App />
         <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </Provider>
   </StrictMode>,
);
