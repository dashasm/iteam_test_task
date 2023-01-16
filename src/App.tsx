import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/global";
import { HomePage } from "./components/HomePage";
import { PageNotFound } from "./components/PageNotFound";
import Header from "./components/Header";
import { Game } from "./components/Game";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/likedList" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path=":id" element={<Game />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};

export default App;
