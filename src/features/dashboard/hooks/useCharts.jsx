import { useQuery } from "@tanstack/react-query";
import { ChartQuery } from "../../../Router";
import { useLoaderData } from "react-router-dom";

const COLORS = { Night: "#0088FE", Morning: "#00C49F", Afternoon: "#FFBB28" };
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function useCharts() {
  const timePeriodChartData = [];
  const ReviewsChartData = [];
  const cancelledRatioChartData = [];

  const load = useLoaderData();
  const q = useQuery(ChartQuery);
  const [timePeriod, cancelledRatio, Reviews] = q.data;

  if (Reviews?.data) {
    Reviews.data.forEach((element) => {
      ReviewsChartData.push({
        name: element.stars + " star",
        users: element.Count,
      });
    });
  }
  if (timePeriod?.data) {
    timePeriod.data.forEach((element) => {
      timePeriodChartData.push({
        name: element.TimePeriod,
        value: element.count,
      });
    });
  }
  console.log(timePeriodChartData);

  if (cancelledRatio?.data) {
    daysOfWeek.forEach((day) => {
      const cncelled = cancelledRatio.data.filter(
        (element) => element.DayName == day && element.isCancelled
      );
      const accepted = cancelledRatio.data.filter(
        (element) => element.DayName == day && !element.isCancelled
      );
      cancelledRatioChartData.push({
        date: day,
        acceptances: accepted.length > 0 ? accepted[0].count : 0,
        cancellations: cncelled.length > 0 ? cncelled[0].count : 0,
      });
    });
  }
  return {
    timePeriodChartData,
    ReviewsChartData,
    cancelledRatioChartData,
    COLORS,
  };
}
