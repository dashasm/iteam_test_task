/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createSlice } from "@reduxjs/toolkit";

export interface IGame {
  appId: string;
  imgUrl: string;
  price: string;
  released: string;
  reviewSummary: string;
  title: string;
  url: string;
}

export interface GameState {
  games: IGame[];
  sorting: string;
  sortOrder: string;
  likedList: IGame[];
  selectedGame: IGame | null;
  fetchedStatus: string;
}

const initialState: GameState = {
  games: [],
  sorting: "Price",
  sortOrder: "asc",
  likedList: [],
  selectedGame: null,
  fetchedStatus: "idle",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateSorting: (state, action) => {
      state.sorting = action.payload;
    },
    updateSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setGames: (state, action) => {
      state.games = action.payload;
    },
    updatedLikedList: (state, action) => {
      const { appId } = action.payload;
      const isLiked = state.likedList.find((elem) => elem.appId === appId);

      if (isLiked) {
        state.likedList = state.likedList.filter(
          (elem) => elem.appId !== appId
        );
      } else {
        state.likedList.push(action.payload);
      }
    },
    setSelectedGame: (state, action) => {
      state.selectedGame = action.payload;
    },
    updateFetchedStatus: (state, action) => {
      state.fetchedStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateSorting,
  updateSortOrder,
  setGames,
  updatedLikedList,
  setSelectedGame,
  updateFetchedStatus,
} = gameSlice.actions;

export default gameSlice.reducer;
