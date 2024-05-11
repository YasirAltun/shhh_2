import React from 'react';
import './App.css';
import StackCard from './Components/StackCard';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navi from "./navbar/Navi";
import { Container, Row, Col } from 'reactstrap';
import Categories2 from "./Categories/Categories2";




function App() {
  return (

    <div>
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs="3">  
            {/*Category list */}
            <Categories2/>
          </Col>
          <Col xs="9">  
           {/*card list */}
            <Routes>
              <Route path="/" element={<StackCard />} />
              <Route path="python" element={<StackCard />} />
              <Route path="csharp" element={<StackCard />} />
              <Route path="/" element={<StackCard />} />

              <Route path="cpp" element={<StackCard />} />


            </Routes>
          </Col>


        </Row>
      </Container>
  </div>







  );
}

export default App;
