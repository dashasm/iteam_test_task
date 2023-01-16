import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Container, Button } from "../styles/pagination";
import arrowLeft from "../images/arrowLeft.svg";
import { StyledSVG } from "../styles/header";
import { RootState } from "../store";

interface Props {
  perPage: number;
  setCurrentPage: (currentPage: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({
  perPage,
  setCurrentPage,
  currentPage,
}) => {
  const { games, likedList } = useSelector((state: RootState) => state);

  const location = useLocation();
  const newGames = location.pathname === "/likedList" ? likedList : games;

  const countPage = Math.ceil(newGames.length / perPage);

  const pageNumbers = [];

  for (let i = 1; i <= countPage; i++) {
    pageNumbers.push(i);
  }

  const [visiblePage, setVisiblePage] = useState(pageNumbers.slice(0, 3));

  return (
    <Container>
      <Button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          const index = visiblePage.findIndex((elem) => elem === currentPage);
          if (
            currentPage > 3 ||
            (currentPage === 3 && index < 2) ||
            (currentPage < 3 && index === 0)
          ) {
            const newVisiblePage = [...visiblePage];
            newVisiblePage.pop();

            if (currentPage > 3 && index === 2) {
              newVisiblePage.unshift(currentPage - 3);
            } else if (currentPage >= 3 && index === 1) {
              newVisiblePage.unshift(currentPage - 3 + index);
            } else if (currentPage >= 3 && index === 0) {
              newVisiblePage.unshift(currentPage - 1);
            } else {
              newVisiblePage.unshift(currentPage - 1);
            }
            setVisiblePage(newVisiblePage);
          }
        }}
        disabled={currentPage === 1}
      >
        <StyledSVG color={"black"} src={arrowLeft} width="10px" />
      </Button>

      {visiblePage.map((elem) => {
        return (
          <Button
            key={elem}
            value={elem}
            active={elem === currentPage ? "#17323A;" : "#5b5e63;"}
            onClick={() => {
              setCurrentPage(elem);
            }}
          >
            {elem}
          </Button>
        );
      })}

      <Button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          if (currentPage >= 3) {
            const newVisiblePage = [...visiblePage];
            newVisiblePage.shift();
            const index = visiblePage.findIndex((elem) => elem === currentPage);
            newVisiblePage.push(currentPage + (3 - index));
            setVisiblePage(newVisiblePage);
          }
        }}
        disabled={currentPage === countPage}
      >
        <StyledSVG
          color={"black"}
          src={arrowLeft}
          transform="rotate(178)"
          width="10px"
        />
      </Button>
    </Container>
  );
};
