import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseContents from "./pages/BrowseContents";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./components/MovieDialog";

function App() {
  return (
    <>
      <Toaster/>
      <MovieDialog/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/browse-contents" element={<BrowseContents />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
