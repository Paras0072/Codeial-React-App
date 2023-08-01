// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './styles/index.css';
// import { App } from './components';
// import { AuthProvider, PostsProvider } from './providers';

// ReactDOM.render(
//   <React.StrictMode>
//     <ToastContainer autoDismiss autoDismissTimeout={5000} theme="colored">
//       <AuthProvider>
//         <PostsProvider>
//           <App />
//         </PostsProvider>
//       </AuthProvider>
//     </ToastContainer>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';
import { App } from './components';
import { AuthProvider, PostsProvider } from './providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer theme="colored" />
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
  </React.StrictMode>
);
