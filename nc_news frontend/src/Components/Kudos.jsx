import { Button } from "react-bootstrap";
import { updateArticleVote, updateCommentVote } from "../util/api";
import { useEffect, useState } from "react";

export default function Kudos({votes, id,type}) {
  const [visibleVote, setVisibleVote] = useState(votes)

  function handleClick(event){
    event.preventDefault();
    const id = event.target.value
    const newVoteChange = event.target.getAttribute("data-value")
    if (type === 'article'){
      updateArticleVote(id,newVoteChange)
      setVisibleVote(visibleVote+Number(newVoteChange)).catch((err)=>{
        console.log(err)
      })
    } else if (type === 'comment'){
      updateCommentVote(id,newVoteChange)
      setVisibleVote(visibleVote+Number(newVoteChange))
    }
  }


  useEffect(()=>{},[visibleVote])

  return (
    <>
      <Button variant="primary" size="sm" className="mx-1" value={id} data-value={1} onClick={handleClick}>
        upvote ▲ 
      </Button>
      <Button variant="primary" size="sm" className="mx-2" disabled>
        {visibleVote}
      </Button>
      <Button variant="primary" size="sm" className="mx-1" value={id} data-value={-1} onClick={handleClick}>
        downvote ▼
      </Button>
    </>
  )
}

