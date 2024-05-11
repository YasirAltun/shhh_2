import React from "react";
import "./App.css";
import StackCard from "./Components/StackCard";
import PythonStackCard from "./Components/pythoncard/PythonStackCard";
import CppStackCard from "./Components/cppcard/CppStackCard";
import JavaStackCard from "./Components/javacard/JavaStackCard";
import CsharpStackCard from "./Components/csahrpcard/CppStackCard";
import Home from "./Components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Navi from "./navbar/Navi";
import { Container, Row, Col } from "reactstrap";
import Categories2 from "./Categories/Categories2";


function App() {
  return (
    <div>
      <Container>
        <div className="NAVI">
        <Row xs="12">
          <Col xs="12">
            <Navi  />
          </Col>
        </Row>
         </div>
        <Row>
          <Col xs="3">
            {/*Category list */}
            <Categories2 />
          </Col>
          <Col  xs="9">
            {/*card list */}
            <Routes>
              <Route path="python" element={<PythonStackCard />} />
              <Route path="csharp" element={<CsharpStackCard />} />
              <Route path="Java" element={<JavaStackCard />} />
              <Route path="Cpp" element={<CppStackCard />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
