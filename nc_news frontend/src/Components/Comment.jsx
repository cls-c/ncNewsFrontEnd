import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Kudos from "./Kudos";

export default function CommentCard() {
  return (
    <section>
      <Container style={{ width: "75%" }}>
        <Row className="justify-content-left">
          <Col md="12" lg="10" xl="8">
            <Card>
              <CardBody>
                <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                <p className="text-muted small mb-0">comment posted date</p>
                <p className="mt-3 mb-4 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip consequat.
                </p>
                <div className="small d-flex justify-content-start">
                    <Kudos/>
                  <a href="#!" className="d-flex align-items-center me-3">

                    <p className="mb-0">Share</p>
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
