/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { StyledSVG } from "../styles/header";
import { IGame, setSelectedGame, updatedLikedList } from "../gamesSlice";
import { RootState } from "../store";

import heart from "../images/heart.svg";
import redHeart from "../images/redHeart.svg";
import {
  CardContainer,
  GameImage,
  Info,
  Price,
  Title,
  Container,
  Date,
} from "../styles/card";

interface Props {
  game: IGame;
}

export const Card: React.FC<Props> = ({ game }) => {
  const { imgUrl, title, price, released, appId } = game;

  const { likedList } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLiked = likedList.find((elem) => elem.appId === appId);

  return (
    <CardContainer
      onClick={() => {
        dispatch(setSelectedGame(game));
        navigate(`:${appId}`);
      }}
    >
      <GameImage src={imgUrl} />
      <Info>
        <Title>{title}</Title>
        <Date>{released}</Date>
        <Container>
          <Price>{price}</Price>
          <StyledSVG
            color={isLiked ? "red" : "white"}
            src={isLiked ? redHeart : heart}
            width={"23px"}
            height={"20px"}
            hover="red"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(updatedLikedList(game));
            }}
          />
        </Container>
      </Info>
    </CardContainer>
  );
};
