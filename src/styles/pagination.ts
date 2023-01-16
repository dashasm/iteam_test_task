import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 6px;
`;

interface ButtonProps {
  active?: string;
}

export const Button = styled.button<ButtonProps>`
  background: ${({ active = "#5b5e63" }) => active};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 12px;

  border: none;
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    background: #404142;
  }

  &:hover {
    background: #17323a;
  }
`;
