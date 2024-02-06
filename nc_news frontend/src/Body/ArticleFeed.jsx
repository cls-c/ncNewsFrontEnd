import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { fetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";



export default function ArticleFeed() {
  const [articleFeed,setArticleFeed] = useState([]);

  function fetchAndUpdateArticleFeed() {
    return fetchArticles().then(({ data: { article } }) => {
      setArticleFeed(article);
    });
  }
  useEffect(() => {
    fetchAndUpdateArticleFeed();
  }, []);
  return (
    <Container fluid className="mt-5"> 
        <Row className="justify-content-center"> 
      <ArticleCard articleFeed={articleFeed} />
      </Row>
    </Container>
  );
}
