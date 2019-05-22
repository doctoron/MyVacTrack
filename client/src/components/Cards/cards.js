import React from 'react';
import {
  Card, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col
} from 'reactstrap';
// import image1 from '../../img/puzzle-sm.jpg'
// import image2 from '../../img/globe-hands-sm.jpg'
// import image3 from '../../img/jump.jpg'

const Cards = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>What Vaccines do YOU need?</CardTitle>
          <CardText></CardText>
          <Button href="https://www2.cdc.gov/nip/adultimmsched/" target="_blank">Take the Quiz</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>What Other Vaccines do YOU need?</CardTitle>
          <CardText></CardText>
          <Button href="http://apps.who.int/worldimmunizationweek/" target="_blank">Test Your Knowledge</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;