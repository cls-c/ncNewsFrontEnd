import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header/Header";
import ArticleFeed from "./Body/ArticleFeed";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./Body/SingleArticle";
import LoadingSpinner from "./Components/LoadingSpinner";
import { userContext } from "./contexts/userContext";
import FilteredArticleFeed from "./Body/FilteredArticleFeed.jsx";
import ResourceNotFound from "./Body/ResourceNotFound.jsx";

function App() {
  const { isLoading } = useContext(userContext);
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleFeed />} />
          <Route path="/home" element={<ArticleFeed />} />
          <Route path="/article/:articleId" element={<SingleArticle />} />
          <Route path="/topic/:topic" element={<FilteredArticleFeed />} />
          <Route path="*" element={<ResourceNotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
