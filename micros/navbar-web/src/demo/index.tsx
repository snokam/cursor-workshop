import { Switch } from "@mui/material";
import SimpleHeader from "../v1/components/SimpleHeader";
import { HeaderTheme } from "../v1";
import Styled from "./styled";
import { useState } from "react";

function Demo() {
  const [theme, setTheme] = useState(HeaderTheme.Light);
  return (
    <>
      <SimpleHeader backUrl="#" theme={theme} />
      <Styled.Container theme={theme}>
        <div>
          Light
          <Switch
            color={theme === HeaderTheme.Dark ? "default" : "primary"}
            checked={theme === HeaderTheme.Dark}
            onChange={() =>
              setTheme(
                theme === HeaderTheme.Dark
                  ? HeaderTheme.Light
                  : HeaderTheme.Dark,
              )
            }
          />
          Dark
        </div>
      </Styled.Container>
    </>
  );
}

export default Demo;
