import { Button } from "react-bootstrap";
import { DeleteComment } from "../util/api";

export default function DeleteCommentButton({
  commentState,
  setCommentState,
  commentId,
}) {
  function handleDeleteCommentSubmit(event) {
    event.preventDefault();
    window.confirm("Are you sure you want to delete the comment")
      ? DeleteComment(commentId).then(() => {
          setCommentState(!commentState);
        })
      : null;
  }
  return (
    <>
      <Button variant="danger" size="sm" onClick={handleDeleteCommentSubmit}>
        Delete Comment
      </Button>
    </>
  );
}
