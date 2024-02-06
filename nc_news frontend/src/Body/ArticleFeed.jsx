import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { userContext } from "../contexts/userContext";
import { fetchArticles } from "../util/api";
import ArticleCard from "../Components/Article";

export default function ArticleFeed() {
  const { articleFeed, setArticleFeed } = useContext(userContext);

  function fetchAndUpdateArticleFeed() {
    return fetchArticles().then(({ data: { article } }) => {
      setArticleFeed(article);
    });
  }
  useEffect(() => {
    fetchAndUpdateArticleFeed();
  }, []);
  return (
    <Container>
      <ArticleCard />
    </Container>
  );
}
