import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { fetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";
import LoadingSpinner from "../Components/LoadingSpinner";
import SortByOrderByFilter from "../Components/SortByOrderByFilter";

export default function ArticleFeed() {
  const [articleFeed, setArticleFeed] = useState([]);
  const { isLoading, setIsLoading } = useContext(userContext);
  const [sortBy, setSortBy]=useState('');
  const [orderBy, setOrderBy]=useState('');

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
              <SortByOrderByFilter sortBy={sortBy} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
              <Row className="justify-content-center">
                <ArticleCard articleFeed={articleFeed} />
              </Row>
            </Container>
          </>
        ));
  }
  return returnBody;
}
