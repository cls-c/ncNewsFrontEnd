import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { FetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";
import LoadingSpinner from "../Components/LoadingSpinner";
import SortByOrderByFilter from "../Components/SortByOrderByFilter";
import { useSearchParams } from "react-router-dom";

export default function ArticleFeed() {
  const [articleFeed, setArticleFeed] = useState([]);
  const { isLoading, setIsLoading } = useContext(userContext);
  const [sortBy, setSortBy]=useState(null);
  const [orderBy, setOrderBy]=useState(null);

  function fetchAndUpdateArticleFeed() {
    setIsLoading(true);

    return FetchArticles(null,sortBy,orderBy).then(({ data: { article } }) => {
      setArticleFeed(article);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    fetchAndUpdateArticleFeed();
  }, [sortBy,orderBy]);

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
