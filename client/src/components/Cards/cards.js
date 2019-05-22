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
        {/* <Card body style={{backgroundColor: '#008080'}} > */}
        <Card body >
          <CardTitle>What Vaccines do YOU need?</CardTitle>
          <CardText></CardText>
          <Button color="success" href="https://www2.cdc.gov/nip/adultimmsched/" target="_blank">Take the CDC Quiz</Button>
          {/* <Link to={vaccinesList}>Take the Quiz</Link> */}
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>WHO Knows What Really Works?</CardTitle>
          <CardText></CardText>
          <Button color="info" href="http://apps.who.int/worldimmunizationweek/" target="_blank">Test Your Knowledge</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;