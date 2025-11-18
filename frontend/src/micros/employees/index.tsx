import Styled from "./styled";
import { Avatar } from "@mui/material";
import { Layout, Breadcrumbs } from "@snokam/core";
import { HomeOutlined } from "@mui/icons-material";
import { LayoutTheme, Padding, TransitionType } from "@snokam/core/layout";
import { Color } from "@snokam/core/theme";

export const EmployeesMicro = () => {
  const crumbs = [
    {
      href: "/",
      name: "Home",
      icon: <HomeOutlined />,
    },
  ];

  return (
    <Layout.Container
      theme={LayoutTheme.Light}
      transitions={{
        bottom: {
          type: TransitionType.Wave,
          color: Color.Blue,
        },
      }}
    >
      <Layout.Content>
        <Layout.Section padding={{ bottom: Padding.Large }}>
          <Breadcrumbs crumbs={crumbs} />
          <h1>Employees</h1>
          <p>Meet our team members.</p>
          <Styled.Container>
            <Avatar />
            <Avatar />
            <Avatar />
          </Styled.Container>
        </Layout.Section>
      </Layout.Content>
    </Layout.Container>
  );
};

export default EmployeesMicro;
