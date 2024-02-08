import { useContext, useState } from "react";
import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import { userContext } from "../contexts/userContext";
import { addNewComment } from "../util/api";

export default function NewCommentCard() {
    const [newComment, setNewComment] = useState("")
  const { avatar } = useContext(userContext);
  const {username, selectedArticleId} = useContext(userContext)
  function handleNewCommentSubmit(event){
    event.preventDefault();
    event.target.reset()
    console.log()
    newComment.length>0 ? addNewComment(selectedArticleId,username,newComment):null
  }
  function handleNewCommentInput(event){
    setNewComment(event.target.value)
  }
  function buttonDisabledCondition(){

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
            <Button type="submit" disabled={newComment.length>0? false:true}>Post Commment</Button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="align-self-end">
          </div>
        </Card>
      </section>
    </>
  );
}

// <div class="form-outline w-100">
// <textarea class="form-control" id="textAreaExample" rows="4"
//   style="background: #fff;"></textarea>
// <label class="form-label" for="textAreaExample">Message</label>
// </div>
// </div>
