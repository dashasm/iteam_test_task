import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";
import { Block, Container, Image, Text, Info, Link } from "../styles/game";

export const Game: React.FC = () => {
  const { selectedGame } = useSelector((state: RootState) => state);

  return (
    <Container>
      <Block>
        <Text>{selectedGame?.title}</Text>
        <Image src={selectedGame?.imgUrl} />
        <Info>Price: {selectedGame?.price}</Info>
        <Info>Publish Date: {selectedGame?.released}</Info>

        <Info>Summary: {selectedGame?.reviewSummary}</Info>
        <Info>
          Additional Information: <Link href={selectedGame?.url}>Link</Link>
        </Info>
      </Block>
    </Container>
  );
};
