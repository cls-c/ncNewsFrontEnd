import axios from "axios";

const ncMarketPlace = axios.create({
  baseURL: "https://clsc-nc-news.onrender.com/api",
});

export const fetchArticles = (category = "") => {
  return ncMarketPlace.get(`/articles`);
};