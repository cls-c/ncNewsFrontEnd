import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../contexts/userContext";
import { fetchArticleById } from "../util/api";
import { Button, Card, Container } from "react-bootstrap";
import Kudos from "../Components/Kudos";
import CommentCount from "../Components/CommentCount";
import CommentSection from "./CommentSection";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function SingleArticle() {
  const { articleId } = useParams();
  const [SingleArticleFeed, setSingleArticleFeed] = useState("");
  const { isLoading, setSelectedArticleId, setIsLoading } =
    useContext(userContext);
  useEffect(() => {
    fetchAndUpdateArticleFeed(articleId);
  }, []);

  function fetchAndUpdateArticleFeed() {
    setIsLoading(true);
    setSelectedArticleId(articleId);
    return fetchArticleById(articleId).then(({ data: { article } }) => {
      setSingleArticleFeed(article[0]);
      setIsLoading(false);
    });
  }
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
  let currentDate = new Date(created_at);
  let returnBody;
  {
    isLoading
      ? (returnBody = <LoadingSpinner />)
      : (returnBody = (
          <>
            {" "}
            <Container>
              <Card style={{ width: "75%", height: "40%" }}>
                <Card.Img variant="top" src={article_img_url} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Subtitle>
                    By {author} - Created at: {currentDate.toDateString()}{" "}
                  </Card.Subtitle>
                  <Card.Text>{body}</Card.Text>
                  <Kudos votes={votes} id={articleId} type={'article'} />
                  <CommentCount comment_count={comment_count} />
                </Card.Body>
              </Card>
              <CommentSection />
            </Container>
          </>
        ));
  }
  return returnBody;
}
