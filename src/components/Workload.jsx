import React, { useEffect } from "react";
import { Flex, Group, Text, createStyles } from "@mantine/core";
import Chart from "chart.js/auto";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";

const Workload = () => {
  const useStyles = createStyles((theme) => ({
    chart: {
      height: 300,
      width: "100%",
    },
    icons: {
      color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
    },
  }));
  const { classes } = useStyles();
  useEffect(() => {
    let barChart;

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
                color: "white",
                font: { size: 14 },
              },
            },
            x: {
              max: 8,
              min: 0,
              stacked: true,
              ticks: {
                stepSize: 2,
                color: "white",
                font: { size: 14 },
              },
              grid: {
                color: "#9da4ad",
                lineWidth: 0.2,
              },
              border: {
                display: false,
              },
            },
            afterFit: function (scale) {
              scale.width = 100;
            },
          },
          // elements: {
          //   bar: {
          //     borderWidth: 2,
          //   },
          // },
          // responsive: true,
          plugins: {
            legend: {
              align: "start",
              labels: {
                usePointStyle: true,
                color: "#9da4ad",
                font: { size: 14 },
              },
            },
          },
        },
      };

      const canvas = document.getElementById("workload");
      const existingChart = Chart.getChart(canvas);

      if (existingChart) {
        existingChart.destroy();
      }

      barChart = new Chart(canvas, config);
    };

    createChart();

    // Clean up function
    return () => {
      if (barChart) {
        barChart.destroy();
      }
    };
  }, []);

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
        <canvas id="workload"></canvas>
      </div>
    </Group>
  );
};

export default Workload;
