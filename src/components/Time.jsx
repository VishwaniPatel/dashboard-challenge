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

const Time = () => {
  const { classes } = useStyles();
  const chartRef = useRef(null);
  const theme = useMantineTheme();

  useEffect(() => {
    let timeChart;

    const createChart = () => {
      const labels = ["Planned Completion", "Actual Completion", "Ahead"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Ahead",
            data: [],
            backgroundColor: [theme.colors.blue[6]],
            barThickness: 18,
            borderWidth: 1,
          },
          {
            label: "Behind",
            data: [],
            backgroundColor: [theme.colors.orange[6]],
            barThickness: 18,
            borderWidth: 1,
          },
          {
            label: "On Time",
            data: [0.5, 14, 14, "", "", ""],
            backgroundColor: [theme.colors.green[6]],
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
            ctx.fillStyle = data.datasets[2].backgroundColor[index];
            ctx.font = "normal 16px sans-serif";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            const halfwidth = width / 2;
            if (element === "") {
              ctx.fillText(element, halfwidth, y);
            } else {
              ctx.fillText(element + "%", halfwidth + 55, y);
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
                color: theme.colorScheme === "dark" ? "white" : "black",
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
                color: theme.colorScheme === "dark" ? "#9da4ad" : "black",
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
                color: theme.colorScheme === "dark" ? "white" : "black",
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
                color:
                  theme.colorScheme === "dark" ? theme.colors.dark[0] : "black",
                font: {
                  size: 14,
                },
              },
            },
          },
        },
        plugins: [plugin],
      };

      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");

        if (timeChart) {
          timeChart.destroy();
        }

        timeChart = new Chart(ctx, config);
      }
    };

    const handleResize = () => {
      createChart();
    };

    createChart();
    window.addEventListener("resize", handleResize);

    return () => {
      if (timeChart) {
        timeChart.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

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
        <canvas ref={chartRef} id="timechart"></canvas>
      </div>
    </Group>
  );
};

export default Time;
