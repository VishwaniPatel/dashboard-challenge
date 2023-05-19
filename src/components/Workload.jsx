import React, { useEffect, useRef } from "react";
import {
  Flex,
  Group,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import Chart from "chart.js/auto";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  chart: {
    height: 300,
    width: "100%",
  },
  icons: {
    color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
  },
}));

const Workload = () => {
  const { classes } = useStyles();
  const chartRef = useRef(null);
  const theme = useMantineTheme();

  useEffect(() => {
    let workloadChart;

    const createChart = () => {
      const labels = ["Mike", "Jennifer", "Brandon", "Sam", "George"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Completed",
            data: [4, 2, 0, 0, 0],
            borderWidth: 1,
            borderThickness: 18,
            backgroundColor: ["#84bb5d"],
          },
          {
            label: "Remaining",
            data: [0, 2, 1, 3, 1],
            borderWidth: 1,
            borderThickness: 18,
            backgroundColor: ["#54d2f9"],
          },
          {
            label: "Overdue",
            data: [],
            borderWidth: 1,
            borderThickness: 18,
            backgroundColor: ["#f0504c"],
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              border: {
                display: true,
              },
              ticks: {
                crossAlign: "far",
                color: theme.colorScheme === "dark" ? "white" : "black",
                font: { size: 14 },
              },
            },
            x: {
              max: 8,
              min: 0,
              stacked: true,
              ticks: {
                stepSize: 2,
                color: theme.colorScheme === "dark" ? "white" : "black",
                font: { size: 14 },
              },
              grid: {
                color: theme.colorScheme === "dark" ? "#9da4ad" : "black",
                lineWidth: 0.2,
              },
              border: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              align: "start",
              labels: {
                usePointStyle: true,
                color: theme.colorScheme === "dark" ? "#9da4ad" : "black",
                font: { size: 14 },
              },
            },
          },
        },
      };

      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");

        if (workloadChart) {
          workloadChart.destroy();
        }

        workloadChart = new Chart(ctx, config);
      }
    };

    const handleResize = () => {
      createChart();
    };

    createChart();
    window.addEventListener("resize", handleResize);

    return () => {
      if (workloadChart) {
        workloadChart.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <Group>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Workload
        </Text>
        <Group>
          <IconArrowsMaximize className={classes.icons} stroke={1} />
          <IconSettings className={classes.icons} stroke={1} />
          <IconHelp className={classes.icons} stroke={1} />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas ref={chartRef}></canvas>
      </div>
    </Group>
  );
};

export default Workload;
