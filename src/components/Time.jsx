import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Flex, Group, Text, createStyles } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";

const Time = () => {
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
      const labels = ["Planned Comple...", "Actual Completion", "Ahead"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Ahead",
            data: [],
            backgroundColor: ["#4198e0"],
            barThickness: 18,
            borderWidth: 1,
          },
          {
            label: "Behind",
            data: [],
            backgroundColor: ["#f7a651"],
            barThickness: 18,
            borderWidth: 1,
          },
          {
            label: "On Time",
            data: [0.5, 14, 14, "", "", ""],
            backgroundColor: ["#70d973"],
            barThickness: 18,
            borderWidth: 1,
          },
        ],
      };
      const plugin = {
        id: "label",
        afterDatasetsDraw: (chart, args, options) => {
          const { ctx, data, width } = chart;
          ctx.save();
          data.datasets[2].data.forEach((element, index) => {
            const { x, y } = chart
              .getDatasetMeta(2)
              .data[index].tooltipPosition();
            (ctx.fillStyle = data.datasets[2].backgroundColor[index]),
              (ctx.font = "normal 16px sans-serif");
            ctx.align = "right";
            ctx.textBaseline = "middle";
            const halfwidth = width / 2;
            if (element == "") {
              ctx.fillText(element, halfwidth + 15, y);
            } else {
              ctx.fillText(element + "%", halfwidth + 15, y);
            }
          });
        },
      };
      const config = {
        type: "bar",
        data: data,
        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            x: {
              max: 100,
              min: -100,
              stacked: true,
              ticks: {
                stepSize: 25,
                color: "white",
                callback: function (value) {
                  if (value < 0) {
                    value = -value;
                    return value;
                  } else {
                    return value;
                  }
                },
              },
              grid: {
                color: "#9da4ad",
                lineWidth: 0.2,
              },
              border: {
                display: false,
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: "white",
                crossAlign: "far",
                font: {
                  size: 14,
                },
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
        plugins: [plugin],
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
          <IconArrowsMaximize className={classes.icons} stroke={1} />
          <IconSettings className={classes.icons} stroke={1} />
          <IconHelp className={classes.icons} stroke={1} />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas id="timechart"></canvas>
      </div>
    </Group>
  );
};

export default Time;
