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