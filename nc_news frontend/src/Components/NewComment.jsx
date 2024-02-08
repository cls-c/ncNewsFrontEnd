import { useContext, useState } from "react";
import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import { userContext } from "../contexts/userContext";
import { addNewComment } from "../util/api";

export default function NewCommentCard({ commentState, setCommentState }) {
  const [newComment, setNewComment] = useState("");
  const { avatar } = useContext(userContext);
  const { username, selectedArticleId } = useContext(userContext);
  const [isCommentPosted, setIsCommentPosted] = useState(false);
  function handleNewCommentSubmit(event) {
    event.preventDefault();
    setIsCommentPosted(true)
    newComment.length > 0
      ? addNewComment(selectedArticleId, username, newComment).then(() => {
          setIsCommentPosted(false);
          setCommentState(!commentState);
        })
      : null;
    event.target.reset();
  }
  function handleNewCommentInput(event) {
    setNewComment(event.target.value);
  }
  function disabledCondition(){
    if (newComment.length > 0){
        return true
    }else if (!isCommentPosted){
        return true
    } else {
        return false
    }
    }

  return (
    <>
      <section>
        <Card>
          <div className="d-flex flex-start">
            <div className="flex-shrink-0">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src={avatar}
                alt="avatar"
                width="40"
                height="40"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <Form onSubmit={handleNewCommentSubmit}>
                <Form.Group className="mb-3" role="form">
                  <Form.Label>New comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="newCommentTextArea"
                    rows={4}
                    placeholder="Enter your comment here..."
                    onChange={handleNewCommentInput}
                  />
                  <Button
                    type="submit"
                    disabled={
                      disabledCondition()? false : true
                    }
                  >
                    Post Commment
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="align-self-end"></div>
        </Card>
      </section>
    </>
  );
}
