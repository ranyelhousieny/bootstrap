import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function MyContainer() {
  return (
    <Container
      style={{
        background: 'gray',
        border: 'solid',
      }}>
      <Row>
        <Col
          style={{
            background:
              'yellow',
            margin: 2,
            border: 'solid',
          }}>
          Row 1 col 1
        </Col>
        <Col
          style={{
            background:
              'yellow',
            margin: 2,
            border: 'solid',
          }}>
          Row 1 col 2
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            background:
              'yellow',
            margin: 2,
            border: 'solid',
          }}>
          Row 2 col 1
        </Col>
      </Row>
    </Container>
  );
}

export default MyContainer;
