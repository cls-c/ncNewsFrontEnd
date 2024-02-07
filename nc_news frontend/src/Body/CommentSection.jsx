import { Card, CardBody, Container, Row } from "react-bootstrap";
import CommentCard from "../Components/Comment";
import { useContext, useEffect, useState } from "react";
import { fetchCommentByArticleId } from "../util/api";
import { userContext } from "../contexts/userContext";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function CommentSection() {
  const [commentArr, setCommentArr] = useState([]);
  const { selectedArticleId, isLoading, setIsLoading } =
    useContext(userContext);

  function fetchAndUpdateComments() {
    fetchCommentByArticleId(selectedArticleId).then((data) => {
      setCommentArr(data);
    });
  }

  useEffect(() => {
    fetchAndUpdateComments();
  }, []);
  let returnBody;
  returnBody = (
    <>
      <Container>
        <Row className="justify-content-centre">
          Comment Section
          {commentArr.length>0 ? (<>          {commentArr.map((comment, index) => {
            return <CommentCard comment={comment} key={`comment ${index}`} />;
          })}</>): <section><Container ><Card><CardBody>No comments yet...</CardBody></Card></Container></section>}
        </Row>
      </Container>
    </>
  );
  return returnBody;
}
