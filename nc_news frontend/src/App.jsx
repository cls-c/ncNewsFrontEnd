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


function App() {
  const {isLoading} = useContext(userContext)
  return (
    <>
      <div className="App">
        <Header />
        {/* {isLoading? <LoadingSpinner/> :  */}
        <Routes>
        <Route path="/" element={<ArticleFeed />} />
          <Route path="/home" element={<ArticleFeed />} />
          <Route path="/article/:articleId" element={<SingleArticle/>} />
          <Route path="/topic/:topic" element={<FilteredArticleFeed/>} />
        </Routes>
        {/* }  */}
      </div>
    </>
  );
}
export default App;
