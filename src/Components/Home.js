import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import homeImg from "../Assets/hero-img.png";
import homeImg from "../Assets/01.png";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div
      style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "3px", height: '350px', width:'100%' }}
            />
          </Col>
          <Col md={6}>
            <h2>Code Websites From Any Where</h2>
            <h5>
              With this online code editor, you can edit HTML, CSS and
              JavaScript code, and live preview of site instantly.
            </h5>
            <Button as={Link} to="/web">
              Web Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
