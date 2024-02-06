import { Container,Row } from "react-bootstrap";
import CommentCard from "../Components/Comment";
import { useEffect, useState } from "react";
import { fetchCommentByArticleId } from "../util/api";

export default function CommentSection (){
    const [commentArr, setCommentArr] =useState([])
    
    function fetchAndUpdateComments(){
        fetchCommentByArticleId.then((data)=>{
            console.log('imdone')
            console.log(data)
            setCommentArr(data)
        })
    }

    useEffect(()=>{fetchAndUpdateComments()},[])
    return (
        <>
        <Container>
        <Row className="justify-content-centre">
            Comment Section
            <CommentCard></CommentCard>
        </Row>
        </Container>
        </>
    )
}