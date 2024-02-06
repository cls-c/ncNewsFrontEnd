import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Header/Header'
import ArticleFeed from './Body/ArticleFeed';


function App() {

  return (
    <>
    <Header/>
    <ArticleFeed />
    </>
  )
}

export default App
