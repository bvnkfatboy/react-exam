
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
