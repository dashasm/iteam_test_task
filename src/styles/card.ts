import styled from "styled-components";

export const CardContainer = styled.div`
  height: 209px;
  width: 100%;

  background: #17323a;
  border-radius: 10px;

  cursor: pointer;
`;

export const Info = styled.div`
  margin: 6px 11px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const Date = styled.h3`
  font-size: 15px;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-size: 14px;
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100px;

  border-radius: 10px;
`;
