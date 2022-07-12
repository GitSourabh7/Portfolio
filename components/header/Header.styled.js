import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 100px;
  border-bottom: 1px solid #ebebeb;
`;

export const TopSearchContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 96%;
  gap: 5rem;
  padding: 1.6rem 0;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
    padding: 1.3rem 0;
    width: 100%;
    position: static;
  }
  height: 65px;
`;

export const Logo = styled.div`
  order: 1;
`;

export const SearchBox = styled.div`
  order: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  flex-basis: 50%;
  padding: 0.8rem 1.2rem;
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  border-radius: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    order: 3;
    flex-basis: 100%;
  }
  &:hover {
    box-shadow: 0 2px 8px 1px rgba(64, 60, 67, 0.24);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 0.5rem 0.8rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: inherit;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.2rem 0.6rem;
    font-size: 1.4rem;
    width: 80%;
  }
`;

export const SettingContainer = styled.div`
  order: 3;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-left: auto;
  margin-top: -5px;
  @media ${(props) => props.theme.breakpoints.sm} {
    order: 2;
  }
`;

export const Profile = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #512da8;
  color: white;
  padding: 0.8rem 1.3rem;
  font-weight: 600;
  margin-top: -3px;
  cursor: pointer;
`;

export const AccountDetails = styled.div`
  position: absolute;
  background-color: #303134;
  color: inherit;
  top: 110%;
  right: -25%;
  border-radius: 0.5rem;
  padding: 0.7rem;

  p {
    font-size: 1.2rem;
    color: #c0c0c0;
    padding-top: 0.4rem;
  }
`;

// Nav Bar Styling
export const NavBarContainer = styled.div`
  padding-top: 70px;
  padding-left: calc(92px + 5rem + 2rem);
  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0px;
    margin: auto;
    width: 70%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 0;
    padding-top: 45px;
    width: 100%;
  }
`;

export const NavBarUl = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  padding: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
`;