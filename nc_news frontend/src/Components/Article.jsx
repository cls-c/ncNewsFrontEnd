import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { userContext } from "../contexts/userContext";
import Kudos from "./Kudos";
import CommentCount from "./CommentCount";

export default function ArticleCard() {
  const { articleFeed } = useContext(userContext);
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
              <Card
                key={`${article_id}+${title}`}
                className="mx-auto"
                style={{ width: "75%"}}
              >
                <Card.Header>Topic: {topic}</Card.Header>
              <a href={`/article?articleId=${article_id}`}><Card.Img variant="top" src={article_img_url} /></a>
                <Card.Body>
                <a href={`/article?articleId=${article_id}`}><Card.Title>{title}</Card.Title></a>
                  <Kudos votes={votes}/>
                  <CommentCount comment_count={comment_count}/>
                </Card.Body>
              </Card>
            </>
          );
        }
      )}
    </>
  );
}
