import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { fetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useParams } from "react-router-dom";

export default function FilteredArticleFeed() {
  const [articleFeed, setArticleFeed] = useState([]);
  const { isLoading, setIsLoading } = useContext(userContext);
  const { topic } = useParams();

  function fetchAndUpdateArticleFeed() {
    setIsLoading(true);
    console.log(topic,"<--topic")
    return fetchArticles(topic).then(({ data: { article } }) => {
      console.log(article)
      setArticleFeed(article);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    fetchAndUpdateArticleFeed();
  }, []);

  let returnBody = ('');

  {
    isLoading
      ? (returnBody = <LoadingSpinner/> )
      : (returnBody = (
          <>
            <Container fluid className="mt-5">
              <Row className="justify-content-center">
                <ArticleCard articleFeed={articleFeed} />
              </Row>
            </Container>
          </>
        ));
  }
  return returnBody;
}
