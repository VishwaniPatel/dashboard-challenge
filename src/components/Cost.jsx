import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Flex, Group, Text, createStyles } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
const Cost = () => {
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
      const data = {
        labels: [""],
        datasets: [
          {
            label: "Actual",
            data: [3.2],
            backgroundColor: ["#84bb5d"],
            barThickness: 52,
            borderWidth: {
              left: 4,
              right: 4,
            },
          },
          {
            label: "Planned",
            data: [4.6],
            backgroundColor: ["#54d2f9"],
            barThickness: 52,
            borderWidth: {
              left: 4,
              right: 4,
            },
          },
          {
            label: "Budget",
            data: [6],
            backgroundColor: ["#4198e0"],
            barThickness: 52,
            borderWidth: {
              left: 4,
              right: 4,
            },
          },
        ],
      };
      const legendMargin = {
        id: "legend_margin",
        beforeInit(chart, legend, options) {
          const fitValue = chart.legend.fit;
          chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            this.height += 30;
          };
        },
      };
      const config = {
        type: "bar",
        data: data,
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              max: 6,
              min: 0,
              ticks: {
                stepSize: 1.5,
                font: {
                  size: 14,
                },
                color: "white",
                callback: function (value, index) {
                  if (index == 0) {
                    return "$" + value;
                  } else {
                    return value + "K";
                  }
                },
              },
              grid: {
                display: true,
                color: "#9da4ad",
                lineWidth: 0.2,
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              align: "start",
              labels: {
                usePointStyle: true,
                color: "#9da4ad",
                font: {
                  size: 14,
                },
              },
            },
          },
        },
        plugins: [legendMargin],
      };

      const canvas = document.getElementById("costchart");
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
          Cost
        </Text>
        <Group>
          <IconArrowsMaximize className={classes.icons} stroke={1} />
          <IconSettings className={classes.icons} stroke={1} />
          <IconHelp className={classes.icons} stroke={1} />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas id="costchart"></canvas>
      </div>
    </Group>
  );
};

export default Cost;
