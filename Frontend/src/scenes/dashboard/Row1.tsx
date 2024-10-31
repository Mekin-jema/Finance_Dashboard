import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
    </>
  );
};

export default Row1;
