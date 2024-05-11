import React from "react";
import "./App.css";
import StackCard from "./Components/StackCard";
import PythonStackCard from "./Components/pythoncard/PythonStackCard";
import CppStackCard from "./Components/cppcard/CppStackCard";
import JavaStackCard from "./Components/javacard/JavaStackCard";
import CsharpStackCard from "./Components/csahrpcard/CppStackCard";

import { Route, Routes, Navigate } from "react-router-dom";
import Navi from "./navbar/Navi";
import { Container, Row, Col } from "reactstrap";
import Categories2 from "./Categories/Categories2";


function App() {
  return (
    <div>
       <div className="container">
      <div className="navbar">
        {/* Navbar içeriği */}
        <Navi />
      </div>
      <div className="categories">
        {/* Kategori listesi */}
        <Categories2 />
      </div>
      <div className="cards">
        {/* Kartlar için alan */}
        <Routes>
              <Route path="/" element={<StackCard />} />
              <Route path="python" element={<PythonStackCard />} />
              <Route path="csharp" element={<CsharpStackCard />} />
              <Route path="Java" element={<JavaStackCard />} />
              <Route path="Cpp" element={<CppStackCard />} />
            </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
