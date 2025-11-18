import Demo from "../demo";

export const getStaticProps = async () => ({
  props: {},
  revalidate: 30 * 60,
});

export default Demo;
