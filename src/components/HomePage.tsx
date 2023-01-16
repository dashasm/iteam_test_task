/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable array-callback-return */
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { IGame } from "../gamesSlice";
import { RootState } from "../store";
import {
  Dot,
  GridContainer,
  Loading,
  LoadingWrapper,
} from "../styles/homePage";
import { Card } from "./Card";
import { useLocation } from "react-router-dom";
import { Pagination } from "./Pagination";

const countItemsPerPage = 4;

export const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { games, sortOrder, sorting, likedList, fetchedStatus } = useSelector(
    (state: RootState) => state
  );

  const location = useLocation();
  const newGames = location.pathname === "/likedList" ? likedList : games;

  const fromItem = (currentPage - 1) * countItemsPerPage + 1;
  const toItem =
    currentPage === Math.ceil(newGames.length / countItemsPerPage)
      ? newGames.length
      : currentPage * countItemsPerPage;

  const filteredGames = useCallback(() => {
    const freeGames: IGame[] = [];
    const paidGames: IGame[] = [];

    const gamesWithDate: IGame[] = [];
    const gamesWithoutDate: IGame[] = [];

    newGames.map((game) => {
      const item = game.price.trim();
      if (moment(game.released, 'DD MMM, YYYY').isValid()) {
        gamesWithDate.push(game);
      } else {
        gamesWithoutDate.push(game);
      }

      if (item.startsWith("Free") || item.length === 0) {
        freeGames.push(game);
      } else {
        paidGames.push(game);
      }
    });

    const sortedByDate = gamesWithDate.sort((a, b) => {
      const aDate = moment(a.released, 'DD MMM, YYYY');
      const bDate = moment(b.released, 'DD MMM, YYYY');

      if (sortOrder === "asc") {
        return aDate.diff(bDate);
      }

      return bDate.diff(aDate);
    });

    const sortedByPrice = paidGames.sort((a, b) => {
      const aPrice = a.price.trim().slice(0, -1).replace(/,/, ".");
      const bPrice = b.price.trim().slice(0, -1).replace(/,/, ".");

      if (sortOrder === "asc") {
        return Number(aPrice) - Number(bPrice);
      }
      return Number(bPrice) - Number(aPrice);
    });

    return sorting === "Price"
      ? [...sortedByPrice, ...freeGames]
      : [...sortedByDate, ...gamesWithoutDate];
  }, [sortOrder, sorting, newGames]);

  const renderContent = () => {
    switch (fetchedStatus) {
      case "idle":
        return filteredGames()
          .slice(fromItem - 1, toItem)
          .map((elem, i) => {
            return <Card key={i} game={elem} />;
          });
      case "loading":
        return (
          <LoadingWrapper>
            <Loading>Loading</Loading>
            <Dot delay="0s" />
            <Dot delay="0.1s" />
            <Dot delay="0.2s" />
          </LoadingWrapper>
        );
      case "error":
        return "Error";
    }
  };

  return (
    <>
      <GridContainer>{renderContent()}</GridContainer>

      {newGames.length > countItemsPerPage && fetchedStatus === "idle" && (
        <Pagination
          perPage={countItemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
