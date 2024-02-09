import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { fetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function ArticleFeed() {
  const [articleFeed, setArticleFeed] = useState([]);
  const { isLoading, setIsLoading } = useContext(userContext);

  function fetchAndUpdateArticleFeed() {
    setIsLoading(true);
    return fetchArticles().then(({ data: { article } }) => {
      setArticleFeed(article);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    fetchAndUpdateArticleFeed();
  }, []);

  let returnBody;

  {
    isLoading
      ? (returnBody = <LoadingSpinner />)
      : (returnBody = (
          <>
            <Container fluid className="mt-5">
                <div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Sort by</Form.Label>
                      <Form.Select onChange={e=>{console.log(e.target.value)}}>
                        <option>Comment Count</option>
                        <option>Date</option>
                        <option>Votes</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Order by</Form.Label>
                      <Form.Select onChange={e=>{console.log(e.target.value)}}>
                        <option>Ascending</option>
                        <option>Descending</option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                </div>
              <Row className="justify-content-center">
                <ArticleCard articleFeed={articleFeed} />
              </Row>
            </Container>
          </>
        ));
  }
  return returnBody;
}
