import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Fantasy from "../books/fantasy.json";
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
        {Fantasy.map((book) => (
          <Col md={3}>
            <Card key={book.asin} style={{ height: "500px", marginBottom: "2rem" }}>
              <Card.Img
                variant="top"
                src={book.img}
                alt="Book Cover"
                className="img-contain"
                style={{ height: "70%" }}
              />
              <Card.Body>
                <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {book.title}
                </Card.Title>
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
