import Default from "./components/folder1/Default"
import ReactDOM from "react-dom/client";
import Alumini from "./components/folder1/Alumini";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alumini" element={<Alumini/>}>
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

