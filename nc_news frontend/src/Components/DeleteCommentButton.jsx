import { Button } from "react-bootstrap";
import { DeleteComment } from "../util/api";
import { useState } from "react";

export default function DeleteCommentButton({
  commentState,
  setCommentState,
  commentId,
}) 
{
    const [isLoading,setIsLoading]=useState(false)
  function handleDeleteCommentSubmit(event) {
    event.preventDefault();
    window.confirm("Are you sure you want to delete the comment")
      ? DeleteComment(commentId,setIsLoading).then(() => {
          setCommentState(!commentState);
          setIsLoading(false)
        })
      : null;
  }
  return (
    <>
      <Button variant="danger" size="sm" onClick={handleDeleteCommentSubmit} disabled={!isLoading}>
        Delete Comment
      </Button>
    </>
  );
}
