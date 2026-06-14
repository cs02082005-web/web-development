import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/27539832/pexels-photo-27539832.jpeg" />
      <Card.Body>
        <Card.Title>House Sepcial - 199</Card.Title>
        <Card.Text>
          This is made with love and affection
        </Card.Text>
        <Button variant="danger">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;