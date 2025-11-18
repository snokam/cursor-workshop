import { Switch } from "@mui/material";
import Footer from "../v1/components/Footer";
import { FooterTheme } from "../v1";
import Styled from "./styled";
import { useState } from "react";
import { TransitionType } from "@snokam/core/layout";

function Demo() {
  const [theme, setTheme] = useState(FooterTheme.Light);
  return (
    <>
      <Styled.Container theme={theme}>
        <div>
          Light
          <Switch
            color={theme === FooterTheme.Dark ? "default" : "primary"}
            checked={theme === FooterTheme.Dark}
            onChange={() =>
              setTheme(
                theme === FooterTheme.Dark
                  ? FooterTheme.Light
                  : FooterTheme.Dark,
              )
            }
          />
          Dark
        </div>
      </Styled.Container>
      <Footer
        theme={theme}
        transitions={{
          top: {
            type: TransitionType.Wave,
            flipX: true,
          },
        }}
      />
    </>
  );
}

export default Demo;
