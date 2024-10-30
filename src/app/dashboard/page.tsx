import BarChart from "../components/charts/BarChart";
import Donut from "../components/charts/Donut";
import LineChart from "../components/charts/LineChart";

export default function page() {
  return (
    <div className="md:grid grid-cols-3 gap-4">
      <BarChart></BarChart>
      <Donut></Donut>
    <LineChart></LineChart></div>
  )
}
