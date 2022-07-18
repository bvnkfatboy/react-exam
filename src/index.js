// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import reportWebVitals from './reportWebVitals';


// import Page_name from './component/name';
// import Page_button from './component/button';
// import Page_main from './Main';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <BrowserRouter>
//         <Route path="/" element={<Page_main />}>
//             <Route index element={<Page_main />} />
//             <Route path="Name" element={<Page_name />} />
//             <Route path="Botton" element={<Page_button />} />
//         </Route>
//     </BrowserRouter>

//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Links from "./Links";
import Page_home from "./Home"
import Page_name from "./component/name";
import Page_button from "./component/button";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />}>
          <Route index element={<Page_home />} />
          <Route path="Name" element={<Page_name />} />
          <Route path="Botton" element={<Page_button />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
