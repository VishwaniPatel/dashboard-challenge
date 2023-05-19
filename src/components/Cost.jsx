import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  Flex,
  Group,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
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

const Cost = () => {
  const { classes } = useStyles();
  const chartRef = useRef(null);
  const theme = useMantineTheme();

  useEffect(() => {
    let costChart;

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
                color: theme.colorScheme === "dark" ? "white" : "black",
                callback: function (value, index) {
                  if (index === 0) {
                    return "$" + value;
                  } else {
                    return value + "K";
                  }
                },
              },
              grid: {
                display: true,
                color: theme.colorScheme === "dark" ? "#9da4ad" : "black",
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
                color: theme.colorScheme === "dark" ? "#9da4ad" : "black",
                font: {
                  size: 14,
                },
              },
            },
          },
        },
        plugins: [legendMargin],
      };

      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");

        if (costChart) {
          costChart.destroy();
        }

        costChart = new Chart(ctx, config);
      }
    };

    const handleResize = () => {
      createChart();
    };

    createChart();
    window.addEventListener("resize", handleResize);

    return () => {
      if (costChart) {
        costChart.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <Group>
      <Flex justify="space-between" w="100%">
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
        <canvas ref={chartRef}></canvas>
      </div>
    </Group>
  );
};

export default Cost;
