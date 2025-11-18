import { Page } from "@/components/Page";
import EmployeesMicro from "../micros/employees";

export const getStaticProps = async () => ({
  props: {},
  revalidate: 30 * 60,
});

const EmployeesPage = () => (
  <Page>
    <EmployeesMicro />
  </Page>
);

export default EmployeesPage;
