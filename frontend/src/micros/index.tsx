import { Layout } from "@snokam/core";
import { LayoutTheme, Padding, TransitionType } from "@snokam/core/layout";
import Link from "next/link";

const HomePageMicro = () => {
  return (
    <Layout.Container
      theme={LayoutTheme.Light}
      transitions={{
        bottom: {
          type: TransitionType.Wave,
        },
      }}
    >
      <Layout.Content>
        <Layout.Section padding={{ bottom: Padding.Large }}>
          <h1>Welcome to Cursor Workshop</h1>
          <p>
            This is a demo application for learning how to build Next.js apps
            with AI assistance.
          </p>
          <span>
            <Link href="/ansatte">View Employees</Link>
          </span>
        </Layout.Section>
      </Layout.Content>
    </Layout.Container>
  );
};

export default HomePageMicro;
