import { Component, createRef, useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { userContext } from "../contexts/userContext";
import Kudos from "./Kudos";
import CommentCount from "./CommentCount";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ articleFeed }) {
  const navigate = useNavigate();
  function articleRedirectSubmit(event) {
    event.preventDefault();
    navigate(`/article/${event.target.getAttribute("value")}`);
  }
  return (
    <>
      {articleFeed.map(
        ({
          title,
          article_id,
          topic,
          votes,
          article_img_url,
          comment_count,
        }) => {
          return (
            <>
              <Col xs="10" lg="4">
                <Card
                  key={`${article_id}+${title}`}
                  id={`${article_id}+${title}`}
                  className="mx-auto"
                  style={{ width: "75%" }}
                >
                  <Card.Header>Topic: {topic}</Card.Header>
                  <Button variant="outline=light" type="button">
                    <Card.Img
                      variant="top"
                      src={article_img_url}
                      value={article_id}
                      onClick={articleRedirectSubmit}
                    />
                  </Button>
                  <Card.Body>
                    <a>
                      <Card.Title
                        value={article_id}
                        onClick={articleRedirectSubmit}
                      >
                        {title}
                      </Card.Title>
                    </a>
                    <Kudos votes={votes} id={article_id} type={"article"} />
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
