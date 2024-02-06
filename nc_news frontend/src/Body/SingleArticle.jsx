import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import { fetchArticleById } from "../util/api";
import { Button, Card, Container } from "react-bootstrap";
import Kudos from "../Components/Kudos";
import CommentCount from "../Components/CommentCount";

export default function SingleArticle() {
  const { articleId } = useParams();
  const [SingleArticleFeed, setSingleArticleFeed] = useState('');
  const { selectedArticleId, setSelectedArticleId } = useContext(userContext);
  useEffect(() => {
    fetchAndUpdateArticleFeed(articleId);
  }, []);

  function fetchAndUpdateArticleFeed() {
    setSelectedArticleId(articleId);
    return fetchArticleById(articleId).then(({ data: { article } }) => {
        console.log(article[0],'<--article0')
      setSingleArticleFeed(article[0]);
    });
  }
  console.log(SingleArticleFeed, "<--single article Feed");
  const {
    author,
    title,
    article_id,
    article_img_url,
    body,
    comment_count,
    created_at,
    topic,
    votes,
  } = SingleArticleFeed;
  let currentDate = new Date (created_at)
  console.log(currentDate.toDateString())
  return (
    <> <Container>
        <Card style={{ width: "75%" , height:"40%"}}>
        <Card.Img variant="top" src={article_img_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>By {author} - Created at: {currentDate.toDateString()} </Card.Subtitle>
          <Card.Text>
            {body}
          </Card.Text>
          <Kudos votes={votes}/>
          <CommentCount comment_count={comment_count}/>
        </Card.Body>
      </Card>
      </Container>
    </>
  );
}
