import { Component, createRef, useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { userContext } from "../contexts/userContext";
import Kudos from "./Kudos";
import CommentCount from "./CommentCount";

export default function ArticleCard({ articleFeed }) {
  function articleRedirectSubmit(event) {
    console.log(event)
    event.preventDefault();
    console.log('hello')
  }
  return (
    <>
      {articleFeed.map(
        (
          { title, article_id, topic, votes, article_img_url, comment_count }
        ) => {
          return (
            <>
              <Col xs="10" lg="4" >
                <Card
                  key={`${article_id}+${title}`}
                  id={`${article_id}+${title}`}
                  className="mx-auto"
                  style={{ width: "75%" }}
                >
                  <Card.Header>Topic: {topic}</Card.Header>
                  <Button
                    variant="outline=light"
                    href={`/article/${article_id}`}
                  >
                    <Card.Img variant="top" src={article_img_url} />
                  </Button>
                  <Card.Body>
                    <a href={`/article/${article_id}`}>
                      <Card.Title>{title}</Card.Title>
                    </a>
                    <Kudos votes={votes} />
                    <CommentCount comment_count={comment_count} />
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        }
      )}
    </>
  );
}
