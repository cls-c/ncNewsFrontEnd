import { Container, Row } from "react-bootstrap";
import CommentCard from "../Components/Comment";
import { useContext, useEffect, useState } from "react";
import { fetchCommentByArticleId } from "../util/api";
import { userContext } from "../contexts/userContext";

export default function CommentSection() {
  const [commentArr, setCommentArr] = useState([]);
  const { selectedArticleId } = useContext(userContext);

  function fetchAndUpdateComments() {
    fetchCommentByArticleId(selectedArticleId).then(
      (data) => {
        setCommentArr(data);
      }
    );
  }

  useEffect(() => {
    fetchAndUpdateComments();
  }, []);
  return (
    <>
      <Container>
        <Row className="justify-content-centre">
          Comment Section
          {commentArr.map((comment,index)=>{
            return <CommentCard comment={comment} key={`comment ${index}`}/>
          })}
        </Row>
      </Container>
    </>
  );
}
