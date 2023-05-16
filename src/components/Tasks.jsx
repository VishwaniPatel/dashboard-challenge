import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Flex, Group, Text } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
const Tasks = () => {
  useEffect(() => {
    (async function () {
      const data = {
        labels: ["Not Started (10)", "Complete (6)", "In Progress (2)"],
        datasets: [
          {
            label: "Task",
            data: [10, 6, 2],
            backgroundColor: ["#9ca3ac", "#68ca6c", "#51ccc3"],
            hoverOffset: 4,
            //   borderWidth: 10,
            cutout: "90%",
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
              },
            },
          },
        },
      });
    })();
  }, []);

  return (
    <Group>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Tasks
        </Text>
        <Group>
          <IconArrowsMaximize />
          <IconSettings />
          <IconHelp />
        </Group>
      </Flex>
      <canvas id="pie"></canvas>
    </Group>
  );
};

export default Tasks;
