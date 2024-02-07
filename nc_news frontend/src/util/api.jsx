import axios from "axios";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";


const ncMarketPlace = axios.create({
  baseURL: "https://clsc-nc-news.onrender.com/api",
});

export const fetchArticles = (category = "") => {
  return ncMarketPlace.get(`/articles`);
};


export const fetchArticleById = (articleId) => {
  return ncMarketPlace.get(`/articles/${articleId}`);
};

export const fetchCommentByArticleId = (articleId) =>{
  return ncMarketPlace.get(`/articles/${articleId}/comments`).then(({ data: { comments } })=>{
    return comments
  })
}

export const updateCommentVote = (commentId,changeVote) => {
  return ncMarketPlace.patch(`/comments/${commentId}`,{
    "inc_votes":changeVote
  })
}
export const updateArticleVote = (commentId,changeVote) => {
  return ncMarketPlace.patch(`/articles/${commentId}`,{
    "inc_votes":changeVote
  })
}