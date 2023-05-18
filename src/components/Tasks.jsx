import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Flex, Group, Text, createStyles } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  task: {
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
  icons: {
    color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
  },

  chart: {
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
}));
const Tasks = () => {
  const { classes } = useStyles();
  useEffect(() => {
    (async function () {
      const data = {
        labels: ["Not Started (10)", "Complete (6)", "In Progress (2)"],
        datasets: [
          {
            label: "Task",
            data: [10, 6, 2],
            hoverOffset: 4,
            backgroundColor: ["#9ca3ac", "#68ca6c", "#51ccc3"],
            borderWidth: 2,
            borderColor: "black",
            cutout: "84%",
          },
        ],
      };

      new Chart(document.getElementById("pie"), {
        type: "doughnut",
        data: data,
        options: {
          plugins: {
            legend: {
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
      });
    })();
  }, []);

  return (
    <Group className={classes.task}>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Tasks
        </Text>
        <Group>
          <IconArrowsMaximize className={classes.icons} stroke={1} />
          <IconSettings className={classes.icons} stroke={1} />
          <IconHelp className={classes.icons} stroke={1} />
        </Group>
      </Flex>
      <div className={classes.chart}>
        <canvas id="pie"></canvas>
      </div>
    </Group>
  );
};

export default Tasks;
