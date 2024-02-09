import axios from "axios";
import { useContext } from "react";
import { userContext } from "../contexts/userContext";


const ncMarketPlace = axios.create({
  baseURL: "https://clsc-nc-news.onrender.com/api",
});

export const fetchArticles = (topic,sortBy,OrderBy) => {
  return ncMarketPlace.get(`/articles`,
  {
    params:{
      topic:topic,
      sort_by:sortBy,
      order:OrderBy
    }
  })

};

export const fetchArticleById = (articleId) => {
  return ncMarketPlace.get(`/articles/${articleId}`);
};

export const fetchCommentByArticleId = (articleId) => {
  return ncMarketPlace
    .get(`/articles/${articleId}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const updateCommentVote = (commentId, changeVote) => {
  return ncMarketPlace
    .patch(`/comments/${commentId}`, {
      inc_votes: changeVote,
    })
    .catch(({ message }) => {
      console.log(message, "in api");
      window.alert(`${message}. Please try again later`);
    });
};
export const updateArticleVote = (commentId, changeVote) => {
  return ncMarketPlace
    .patch(`/articles/${commentId}`, {
      inc_votes: changeVote,
    })
    .catch(({ message }) => {
      window.alert(`${message}. Please try again later`);
    });
};

export const addNewComment = (articleId, username, newComment, setHasError) => {
  return ncMarketPlace
    .post(`/articles/${articleId}/comments`, {
      "username": username,
      "body": newComment,
    })
    .then((data) => {
      window.alert('Your comment has been posted!')
      setHasError(false)
    })
    .catch(({ message }) => {
      window.alert(
        `${message}. Unable to post your comment. Please try again later`
      );
      setHasError(true)
    });
};

export const DeleteComment = (commentId,setIsLoading) =>{
  setIsLoading(true)
  return ncMarketPlace
  .delete(`/comments/${commentId}`)
  .then(() => {
    window.alert('Your comment has been deleted!')
  })
  .catch(({ message }) => {
    window.alert(
      `${message}. Unable to delete your comment. Please try again later`
    );
  });
}

export const GetAllTopic = () => {
  return ncMarketPlace.get('/topics')
  .then(({data:{topic}})=>{
    console.log(topic)
    return topic
  })
}