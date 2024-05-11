import React from 'react';
import './App.css';
import StackCard from './Components/StackCard';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navi from "./navbar/Navi";
import { Container, Row, Col } from 'reactstrap';



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
          </Col>
          <Col xs="9">  
           {/*card list */}
            <Routes>
              <Route path="/" element={<StackCard />} />
            </Routes>
          </Col>


        </Row>
      </Container>
  </div>


  );
}

export default App;
