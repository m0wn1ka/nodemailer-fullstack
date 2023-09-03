import Default from "./components/folder1/Default"
import ReactDOM from "react-dom/client";
import Mail from "./components/folder1/Mail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mail" element={<Mail/>}>
          
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

