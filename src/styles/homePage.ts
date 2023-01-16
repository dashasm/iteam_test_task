import styled, { keyframes } from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 15px;
  padding: 0 80px;

  @media (max-width: 650px) {
    padding: 0 15px 20px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

interface DotProps {
  delay: string;
}

export const Dot = styled.div<DotProps>`
  background-color: white;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;

  animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

export const Loading = styled.h3`
  font-size: 25px;
  color: white;
  padding: 10px;
`;
export const NotFound = styled.div`
  color: white;
  font-size: 30px;
`;
