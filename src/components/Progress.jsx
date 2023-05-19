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
  },
  icons: {
    color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
  },
}));

const Progress = () => {
  const chartRef = useRef(null);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  useEffect(() => {
    let progressChart; // Declare a variable to hold the Chart instance

    const data = {
      labels: [
        "Contracts",
        "Design",
        "Procurement",
        "Construction",
        "Post Const...",
        "Project Clo...",
      ],
      datasets: [
        {
          label: "",
          data: [100, 80, 19, 0.5, 0.5, 0.5],
          backgroundColor: [
            "#84bb5d",
            "#84bb5d",
            "#de5a9c",
            "#868a95",
            "#868a95",
            "#868a95",
          ],
          barThickness: 20,
        },
      ],
    };

    const plugin = {
      id: "label",
      afterDatasetsDraw: (chart) => {
        const { ctx, data } = chart;
        ctx.save();
        data.datasets[0].data.forEach((element, index) => {
          const { x, y } = chart
            .getDatasetMeta(0)
            .data[index].tooltipPosition();
          ctx.fillStyle = data.datasets[0].backgroundColor[index];
          ctx.font = "normal 14px sans-serif";
          ctx.align = "right";
          ctx.textBaseline = "middle";
          ctx.fillText(element + "%", 100, y);
        });
      },
    };

    const createChart = () => {
      // Destroy the previous Chart instance if it exists
      if (progressChart) {
        progressChart.destroy();
      }

      // Create a new Chart instance
      progressChart = new Chart(chartRef.current, {
        type: "bar",
        data: data,
        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            y: {
              ticks: {
                crossAlign: "far",
                color: theme.colorScheme === "dark" ? "white" : "black",
                font: {
                  size: 14,
                },
              },
              afterFit: function (scale) {
                scale.width = 150;
              },
              grid: {
                display: false,
              },
              border: {
                display: false,
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
          plugins: {
            legend: {
              labels: {
                boxWidth: 0,
              },
            },
          },
        },
        plugins: [plugin],
      });
    };

    createChart(); // Create the initial chart

    // Resize chart on window resize
    const handleResize = () => {
      createChart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (progressChart) {
        progressChart.destroy(); // Destroy the Chart instance on component unmount
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <Group>
      <Flex justify={"space-between"} align={"center"} w={"100%"}>
        <Text fw={700} size={25}>
          Progress
        </Text>
        <Group>
          <IconArrowsMaximize className={classes.icons} stroke={1} />
          <IconSettings className={classes.icons} stroke={1} />
          <IconHelp className={classes.icons} stroke={1} />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas ref={chartRef} id="barchart"></canvas>
      </div>
    </Group>
  );
};

export default Progress;
