import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Nav from "react-bootstrap/Nav";
function App() {
  return (
    <div className="App">
      <div className="mun">
        <div className="logo">
          <img src="/Img/logo.png" alt="tewt img"></img>
        </div>
        <div className="navHolder">
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home" className="menu-item">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="menu-item">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="menu-item activ">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="flex-div">
        <div className="contantHolder">
          <div className="imgHolder">
            <img src="/Img/massege.png" alt="massege img"></img>
          </div>
          <div className="tatileHolder">
            <h2> Drop Us a Message </h2>
            <p>We would love to hear from you !</p>
          </div>
        </div>
        <div classNmae="formsHolder">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <Button variant="primary" type="submit" className="but">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="footer">
        <span>Get connected with us on social networks:</span>
        <div className="social">
          <img src="/Img/face.png" alt="face img"></img>

          <img src="/Img/twet.png" alt="tewt img"></img>

          <img src="/Img/insta.png" alt="instagram img"></img>
        </div>
        <span>© 2021 Copyright</span>
      </div>
    </div>
  );
}

export default App;
