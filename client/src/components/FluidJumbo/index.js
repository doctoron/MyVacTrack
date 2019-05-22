import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Cards from '../Cards/cards.js';

const FluidJumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          {<Cards />}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default FluidJumbo;