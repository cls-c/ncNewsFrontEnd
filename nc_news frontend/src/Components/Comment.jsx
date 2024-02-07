import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Kudos from "./Kudos";

export default function CommentCard({comment}) {
  const {comment_id,votes,created_at,author,body,article_id} =comment;
  const dateStamp = new Date(created_at)
  return (
    <section>
      <Container style={{ width: "75%" }}>
        <Row className="justify-content-left">
          <Col md="12" lg="10" xl="8">
            <Card>
              <CardBody>
                <h6 className="fw-bold text-primary mb-1">{author}</h6>
                <p className="text-muted small mb-0">{ dateStamp.toDateString()}</p>
                <p className="mt-3 mb-4 pb-2">
                  {body}
                </p>
                <div className="small d-flex justify-content-start">
                    <Kudos votes={votes}/>
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
