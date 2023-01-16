import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Block = styled.div`
  background: #837f7f;
  border-radius: 10px;
  max-width: 650px;
  min-width: 250px;
  padding: 10px;
`;

export const Image = styled.img`
  max-width: 300px;
  min-width: 200px;
  max-height: 200px;
  min-height: 120px;
`;

export const Text = styled.h2`
  font-size: 30px;
  color: #ffffff;
  padding-bottom: 10px;
`;

export const Info = styled.div`
  color: #ffffff;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Link = styled.a`
  color: blue;
  cursor: pointer;
`;
