import {
  Card,
  CardDeck,
} from 'react-bootstrap';
import logo from '../logo.svg';

function MyCard() {
  return (
    <CardDeck>
      <Card>
        <Card.Img
          src={logo}
        />
        <Card.Body>
          <Card.Title>
            Card 1
          </Card.Title>
          <Card.Text>
            This is Card 1.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default MyCard;

/*

<Card className="mb-3" style={{color : 'blue'}}>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>This is The Title</Card.Title>
            <Card.Text>
              This is the Card Text. You can write a paragraph here.
            </Card.Text>
            <Button>Bootstrap Button</Button>
          </Card.Body>
        </Card>

*/
