import styled from "@emotion/styled";
import { Layout } from "@snokam/core";

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: inherit;
  gap: 0.5rem;
`;

const Right = styled.div`
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Name = styled.div`
  font-size: 20px;
  text-transform: capitalize;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const BackText = styled.div`
  @media only screen and (max-width: 360px) {
    display: none;
  }
`;

const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export default {
  Menu,
  Link,
  BackText,
  Right,
  User,
  Name,
  LogoText,
};
