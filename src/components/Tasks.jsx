import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  Flex,
  Group,
  Text,
  useMantineTheme,
  createStyles,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
  },
}));
const Tasks = () => {
  const chartRef = useRef(null);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  useEffect(() => {
    let taskChart;
    const plugin = {
      id: "label",
      afterDraw: (chart) => {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;
        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
            const { x, y } = datapoint.tooltipPosition();
            ctx.fillStyle = dataset.backgroundColor[index];

            const halfwidth = width / 2;
            const halfheight = height / 2;
            const xLine = x >= halfwidth ? x + 15 : x - 15;
            const yLine = y >= halfheight ? y + 15 : y - 15;
            ctx.font = "18px Arial";
            const textXPosition = x >= halfwidth ? "left" : "right";
            const plusFivePx = x >= halfwidth ? 5 : -5;
            ctx.textBaseLine = "middle";
            ctx.textAlign = textXPosition;
            ctx.fillText(dataset.data[index], xLine + plusFivePx, yLine);
          });
        });
      },
    };

    const createChart = () => {
      const data = {
        labels: ["Not Started (10)", "Complete (6)", "In Progress (2)"],
        datasets: [
          {
            label: "Task",
            data: [10, 6, 2],
            hoverOffset: 4,
            backgroundColor: ["#9ca3ac", "#68ca6c", "#51ccc3"],
            borderWidth: 2,
            borderColor: theme.colorScheme === "dark" ? "#101320" : "white",
            cutout: "84%",
          },
        ],
      };

      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");

        if (taskChart) {
          taskChart.destroy();
        }

        taskChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: {
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                  color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
                  font: {
                    size: 14,
                  },
                },
              },
            },
          },
          plugins: [plugin],
        });
      }
    };

    const handleResize = () => {
      createChart();
    };

    createChart();
    window.addEventListener("resize", handleResize);

    return () => {
      if (taskChart) {
        taskChart.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <Group>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Tasks
        </Text>
        <Group>
          <IconArrowsMaximize stroke={1} />
          <IconSettings stroke={1} />
          <IconHelp stroke={1} />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas ref={chartRef} id="pie"></canvas>
      </div>
    </Group>
  );
};

export default Tasks;
