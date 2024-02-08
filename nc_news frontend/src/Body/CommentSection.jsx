import { Card, CardBody, Container, Row } from "react-bootstrap";
import CommentCard from "../Components/Comment";
import { useContext, useEffect, useState } from "react";
import { fetchCommentByArticleId } from "../util/api";
import { userContext } from "../contexts/userContext";
import LoadingSpinner from "../Components/LoadingSpinner";
import NewCommentCard from "../Components/NewComment";

export default function CommentSection() {
  const [commentArr, setCommentArr] = useState([]);
  const { selectedArticleId, isLoading, setIsLoading } =
    useContext(userContext);
  const [commentState, setCommentState]=useState(false)

  function fetchAndUpdateComments() {
    fetchCommentByArticleId(selectedArticleId).then((data) => {
      setCommentArr(data);
    });
  }

  useEffect(() => {
    fetchAndUpdateComments();
  }, [commentState]);
  let returnBody;
  returnBody = (
    <>
      <Container >
        <Row className="justify-content-centre">
        <h4 className="mb-0">Recent comments</h4>
        <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>
        <NewCommentCard commentState={commentState} setCommentState={setCommentState}/>
          {commentArr.length > 0 ? (
            <>
              {commentArr.map((comment, index) => {
                return (
                  <CommentCard comment={comment} commentState={commentState} setCommentState={setCommentState} key={`comment ${index}` } />
                );
              })}
            </>
          ) : (
            <section>
              <Container>
                <Card>
                  <CardBody>No comments yet...</CardBody>
                </Card>
              </Container>
            </section>
          )}
        </Row>
      </Container>
    </>
  );
  return returnBody;
}
