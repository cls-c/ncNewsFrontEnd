import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header/Header";
import ArticleFeed from "./Body/ArticleFeed";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./Body/SingleArticle";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<ArticleFeed />} />
          <Route path="/home" element={<ArticleFeed />} />
          <Route path="/article/:articleId" element={<SingleArticle/>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
