import { Group, Flex, Text } from "@mantine/core";
import Chart from "chart.js/auto";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
import React, { useEffect } from "react";

const Progress = () => {
  useEffect(() => {
    (async function () {
      const labels = [1, 2, 3, 4, 5, 6, 7];
      const data = {
        labels: labels,
        datasets: [
          {
            axis: "y",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      };

      new Chart(document.getElementById("barchart"), {
        type: "bar",
        data: data,
        options: {
          indexAxis: "y",
        },
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
          <IconArrowsMaximize />
          <IconSettings />
          <IconHelp />
        </Group>
      </Flex>
      <canvas id="barchart"></canvas>
    </Group>
  );
};

export default Progress;
