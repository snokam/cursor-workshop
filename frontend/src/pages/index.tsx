import { Page } from "@/components/Page";
import HomePageMicro from "../micros";

export const getStaticProps = async () => ({
  props: {},
  revalidate: 30 * 60,
});

const HomePage = () => (
  <Page>
    <HomePageMicro />
  </Page>
);

export default HomePage;
