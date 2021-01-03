import React from 'react';
import {Row,Col ,Container} from 'react-bootstrap';
import Login from './components/Login';
import SignUp from './components/SignUp'
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col >
          <SignUp />
          </Col>
          <Col lg="4" md="4">
            <Login/>
          
          </Col>
        </Row>
        
      </Container>

      
    </div>
  );
}

export default App;
