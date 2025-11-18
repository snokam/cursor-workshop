import styled from "@emotion/styled";
import LinkBase from "next/link";

const Link = styled(LinkBase)`
  display: flex;
  align-items: center;
  padding: 0rem;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  margin-bottom: 1.5rem;

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: inherit;
  }
`;

export default { Link, Title, Content };
