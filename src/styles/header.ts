import styled from "styled-components";

import SVG from "react-inlinesvg";

interface SVGProps {
  color: string;
  width?: string;
  hover?: string;
  transform?: string;
  size?: string;
}

export const StyledSVG = styled(SVG)<SVGProps>`
  width: ${({ width = "23px" }) => width};
  height: ${({ height = "23px" }) => height};
  transform: ${({ transform }) => transform};
  cursor: pointer;

  & path {
    fill: ${({ color }) => color};
  }

  &:hover {
    & path {
      fill: ${({ hover }) => hover};
    }
  }

  @media (max-width: 1100px) and (min-width: 655px) {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;

interface FlexContainerProps {
  gap?: string;
  direction?: string;
  content?: string;
  hover?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ content = "center" }) => content};
  flex-direction: ${({ direction = "column" }) => direction};
  gap: ${({ gap = "2px" }) => gap};
  padding: 8px 10px;

  &:hover {
    background: ${({ hover }) => hover};
    border-radius: 10px;
  }
`;

export const Theme = styled.div`
  background: #171a21;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled(Flex)`
  margin: 35px 0;
  gap: 15px;

  @media (max-width: 650px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 50% 1fr 15%;

    grid-template-areas:
      "logo menu menu"
      "input input input"
      "select select filter";
    column-gap: 20px;
  }

  @media (max-width: 1100px) and (min-width: 655px) {
    display: grid;
    grid-template-columns: 20% 1fr 8% 15% 20%;

    grid-gap: 15px;
  }
`;

export const Logo = styled.img`
  height: 35px;
  width: 100%;
  margin: 0;

  @media (max-width: 650px) {
    height: 60px;
  }

  @media (min-width: 1100px) {
    margin: 15px;
    width: 150px;
  }
`;

interface ContainerProps {
  grid: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  @media (max-width: 650px) {
    grid-area: ${({ grid }) => grid};
  }
`;

export const Search = styled.input.attrs({
  type: "input",
  placeholder: "Enter an app name...",
})`
  width: 100%;
  min-width: 500px;
  height: 35px;
  background: #837f7f;
  border-radius: 10px;

  font-size: 12px;

  padding: 10px 15px;

  outline: none;
  border: none;

  color: #ffffff;

  ::placeholder {
    color: #ffffff;
  }

  @media (max-width: 650px) {
    min-width: 0;
  }

  @media (max-width: 1100px) and (min-width: 655px) {
    max-width: 100%;
    min-width: 0;
    gap: 30px;
  }
`;

export const SearchIcon = styled.div`
  width: 26px;
  height: 26px;

  position: absolute;
  top: 7px;
  right: 6px;
`;

export const SortOrder = styled(Flex)`
  height: 36px;

  background: #837f7f;
  border-radius: 10px;
  cursor: pointer;

  width: 100%;

  @media (min-width: 1100px) {
    width: 37px;
  }
`;

interface DropdownProps {
  width: string;
  top: string;
  right?: string;
  widthOnMobile?: string;
}

export const Dropdown = styled.div<DropdownProps>`
  dispaly: none;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};

  width: ${({ width }) => width};

  background: #837f7f;
  border-radius: 10px;

  transition: opacity 0.3s ease-out;

  @media (max-width: 1100px) {
    rigth: 0;
    width: ${({ widthOnMobile }) => widthOnMobile};
  }
`;

export const SortItem = styled.div`
  font-size: 14px;

  color: #ffffff;
  margin: 0;

  text-align: center;
  cursor: pointer;
`;

export const Menu = styled(Flex)`
  width: 134px;
  height: 37px;

  background: #837f7f;
  border-radius: 10px;

  gap: 10px;
  cursor: pointer;

  @media (max-width: 650px) {
    gap: 15px;
    width: 100%;
  }
  @media (max-width: 1100px) and (min-width: 655px) {
    gap: 5px;
    width: 100%;
  }
`;

interface MenuItemProps {
  fontSize: string;
  color: string;
}

export const MenuItem = styled.div<MenuItemProps>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 15px;

  color: ${({ color }) => color};
  padding: 10px;

  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 1100px) and (min-width: 655px) {
    padding: 5px;
  }
`;

export const ContainerCustom = styled.div`
  min-width: 189px;
  height: 36px;

  background: #837f7f;
  border-radius: 10px;

  @media (max-width: 1100px) {
    min-width: 0;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  color: #ffffff;
`;
