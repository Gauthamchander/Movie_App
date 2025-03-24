import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewAllMovies from './features/movies/ViewAllMovies'
import Header from './components/header'
import SearchResults from './features/movies/SearchResults'

function App() {

  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:category" element={<ViewAllMovies />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  )
}

export default App
