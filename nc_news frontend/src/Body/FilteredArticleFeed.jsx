import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { FetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";
import SortByOrderByFilter from "../Components/SortByOrderByFilter";

export default function FilteredArticleFeed() {
  const [articleFeed, setArticleFeed] = useState([]);
  const { isLoading, setIsLoading } = useContext(userContext);
  const { topic } = useParams();
  const [sortBy, setSortBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);

  function fetchAndUpdateArticleFeed() {
    setIsLoading(true);
    return FetchArticles(null, sortBy, orderBy).then(
      ({ data: { article } }) => {
        setArticleFeed(article);
        console.log(location.search, "<--location.search");
        setIsLoading(false);
      }
    );
  }
  useEffect(() => {
    fetchAndUpdateArticleFeed();
  }, [sortBy,orderBy]);

  let returnBody = "";

  {
    isLoading
      ? (returnBody = <LoadingSpinner />)
      : (returnBody = (
          <>
            <Container fluid className="mt-5">
              <Row className="justify-content-center">
                <SortByOrderByFilter
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  setOrderBy={setOrderBy}
                />

                <ArticleCard articleFeed={articleFeed} />
              </Row>
            </Container>
          </>
        ));
  }
  return returnBody;
}
