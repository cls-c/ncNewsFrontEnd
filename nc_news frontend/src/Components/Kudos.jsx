import { Button } from "react-bootstrap";

export default function Kudos({votes}) {
  return (
    <>
      <Button variant="primary" size="sm" className="mx-1">
        upvote ▲
      </Button>
      <Button variant="primary" size="sm" className="mx-2" disabled>
        {votes}
      </Button>
      <Button variant="primary" size="sm" className="mx-1">
        downvote ▼
      </Button>
    </>
  )
}

