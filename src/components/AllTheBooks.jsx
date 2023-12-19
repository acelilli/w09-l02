import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fantasy from "../../fantasy.json";
// import scifi from "../data/books/scifi.json";
// import history from "../data/books/history.json";
// import romance from "../data/books/romance.json";
// import horror from "../data/books/horror.json";

const AllTheBooks = (fantasy) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {/* Row divise per generi: FANTASY */}
        {/* PRIMO MAP: JSON FANTASY */}
        {fantasy.map((book) => (
          <Col md={4}>
            <Card key={book.asin}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <p>- {book.price}</p>
                </Card.Text>
                <Button variant="primary">Add To cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
