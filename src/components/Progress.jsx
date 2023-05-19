import { Group, Flex, Text, createStyles } from "@mantine/core";
import Chart from "chart.js/auto";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
import React, { useEffect } from "react";
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
  const { classes } = useStyles();

  useEffect(() => {
    (async function () {
      const labels = [1, 2, 3, 4, 5, 6, 7];
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
            (ctx.fillStyle = data.datasets[0].backgroundColor[index]),
              (ctx.font = "normal 14px sans-serif");
            ctx.align = "right";
            ctx.textBaseline = "middle";
            ctx.fillText(element + "%", 100, y);
          });
        },
      };
      new Chart(document.getElementById("barchart"), {
        type: "bar",
        data: data,

        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            y: {
              ticks: {
                crossAlign: "far",
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
    })();
  }, []);
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
        <canvas id="barchart"></canvas>
      </div>
    </Group>
  );
};

export default Progress;
