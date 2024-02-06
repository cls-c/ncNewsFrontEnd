import { Button } from "react-bootstrap";

export default function CommentCount({comment_count}) {
  return (
    <>
      <Button variant="light" className="mx-2" disabled>
        Comment: {comment_count}
      </Button>
    </>
  );
}

