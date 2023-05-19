import React from "react";
import { Table, Text, Flex, Group, createStyles } from "@mantine/core";
import { IconHelp } from "@tabler/icons-react";
const HealthData = () => {
  const useStyles = createStyles((theme) => ({
    icons: {
      color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
    },
  }));
  const { classes } = useStyles();
  return (
    <Group>
      <Flex justify={"space-between"} align={"center"} w={"100%"}>
        <Text fw={700} size={25}>
          Health
        </Text>
        <IconHelp className={classes.icons} stroke={1} />
      </Flex>
      <Table>
        <tbody>
          <tr>
            <td>Time</td>
            <td>14% ahead of schedule.</td>
          </tr>
          <tr>
            <td>Tasks</td>
            <td>12 tasks to be completed.</td>
          </tr>
          <tr>
            <td>Workload</td>
            <td>0 tasks overdue.</td>
          </tr>
          <tr>
            <td>Progress</td>
            <td>14% complete.</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>42% under budget.</td>
          </tr>
        </tbody>
      </Table>
    </Group>
  );
};

export default HealthData;
