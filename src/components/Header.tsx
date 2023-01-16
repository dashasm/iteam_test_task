import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  HeaderContainer,
  Logo,
  Search,
  SortOrder,
  Menu,
  MenuItem,
  StyledSVG,
  SearchIcon,
  Container,
  Dropdown,
  FlexContainer,
  SortItem,
  ContainerCustom,
  Text,
} from "../styles/header";
import { RootState } from "../store";
import {
  setGames,
  updateFetchedStatus,
  updateSorting,
  updateSortOrder,
} from "../gamesSlice";
import { getGames } from "../api";

import logo from "../images/logo.png";
import search from "../images/search.svg";
import filter from "../images/filter.svg";
import arrowDown from "../images/arrowDown.svg";
import arrowUp from "../images/arrowUp.svg";
import price from "../images/price.svg";
import publishDate from "../images/publishDate.svg";

const Header: React.FC = () => {
  const [isVisibleOrderDropdown, setIsVisibleOrderDropdown] = useState(true);
  const [isVisibleSortDropdown, setIsVisibleSortDropdown] = useState(true);
  const [title, setTitle] = useState("");

  const { sorting } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <HeaderContainer>
      <Container grid="logo">
        <Logo src={logo} />
      </Container>

      <Container grid="input">
        <Search
          value={title}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              dispatch(updateFetchedStatus("loading"));
              getGames(title)
                .then((res) => {
                  dispatch(updateFetchedStatus("idle"));
                  dispatch(setGames(res));
                })
                .catch(() => {
                  dispatch(updateFetchedStatus("error"));
                });
            }
          }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <SearchIcon>
          <StyledSVG color={"black"} src={search} />
        </SearchIcon>
      </Container>

      <Container grid="filter">
        <SortOrder
          onClick={() => {
            setIsVisibleOrderDropdown((prev: boolean) => !prev);
            setIsVisibleSortDropdown(true);
          }}
        >
          <StyledSVG color={"black"} src={filter} />
        </SortOrder>
        <Dropdown
          top="43px"
          right="0"
          width="144px"
          hidden={isVisibleOrderDropdown}
        >
          <FlexContainer hover="#696666">
            <SortItem
              onClick={() => {
                dispatch(updateSortOrder("asc"));
                setIsVisibleOrderDropdown(true);
              }}
            >
              Lower to bigger
            </SortItem>
          </FlexContainer>

          <FlexContainer hover="#696666">
            <SortItem
              onClick={() => {
                dispatch(updateSortOrder("desc"));
                setIsVisibleOrderDropdown(true);
              }}
            >
              Bigger to lower
            </SortItem>
          </FlexContainer>
        </Dropdown>
      </Container>

      <Container grid="select">
        <ContainerCustom>
          <SortItem
            onClick={() => {
              setIsVisibleSortDropdown((prev) => !prev);
              setIsVisibleOrderDropdown(true);
            }}
          >
            <FlexContainer direction="row" content="space-between">
              <Text>{sorting}</Text>
              <StyledSVG
                color={"black"}
                src={isVisibleSortDropdown ? arrowUp : arrowDown}
              />
            </FlexContainer>
          </SortItem>

          <Dropdown
            top="43px"
            width="189px"
            hidden={isVisibleSortDropdown}
            widthOnMobile="100%"
          >
            <FlexContainer
              content="space-between"
              direction="row"
              hover="#696666"
              onClick={() => {
                dispatch(updateSorting("Price"));
                setIsVisibleSortDropdown(true);
              }}
            >
              <SortItem>Price</SortItem>

              <StyledSVG color={"black"} src={price} />
            </FlexContainer>
            <FlexContainer
              content="space-between"
              direction="row"
              hover="#696666"
              onClick={() => {
                dispatch(updateSorting("Publish Date"));
                setIsVisibleSortDropdown(true);
              }}
            >
              <SortItem>Publish Date</SortItem>

              <StyledSVG color={"black"} src={publishDate} />
            </FlexContainer>
          </Dropdown>
        </ContainerCustom>
      </Container>

      <Container grid="menu">
        <Menu>
          <MenuItem
            onClick={() => {
              navigate("/");
            }}
            fontSize={location.pathname === "/" ? "15px" : "12px"}
            color={location.pathname === "/" ? "black" : "#ffffff"}
          >
            Search
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/likedList");
            }}
            fontSize={location.pathname === "/likedList" ? "15px" : "12px"}
            color={location.pathname === "/likedList" ? "black" : "#ffffff"}
          >
            Like list
          </MenuItem>
        </Menu>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
