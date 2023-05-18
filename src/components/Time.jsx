import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Flex, Group, Text, createStyles } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";

const useStyles = createStyles(() => ({
  chart: {
    height: 300,
    width: "100%",
  },
}));

const Time = () => {
  const { classes } = useStyles();

  useEffect(() => {
    let barChart;

    const createChart = () => {
      const labels = ["Planned Comple...", "Actual Completion", "Ahead"];
      const data = {
        labels: labels,
        datasets: [
          {
            labels: "Dataset 1",
            data: [0, 14, 14],
            borderColor: "#68ca6c",
            backgroundColor: "#68ca6c",
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          indexAxis: "y",
          scales: {
            y: {
              grid: {
                display: false,
              },
              border: {
                display: true,
              },
            },
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              labels: {
                boxWidth: 0,
              },
            },
          },
        },
      };

      const canvas = document.getElementById("timechart");
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
      <Flex justify="space-between" w="100%">
        <Text fw={700} size={25}>
          Time
        </Text>
        <Group>
          <IconArrowsMaximize />
          <IconSettings />
          <IconHelp />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas id="timechart"></canvas>
      </div>
    </Group>
  );
};

export default Time;
