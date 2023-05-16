import React from "react";
import { Flex, Group, Text } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
const Workload = () => {
  return (
    <Group>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Workload
        </Text>
        <Group>
          <IconArrowsMaximize />
          <IconSettings />
          <IconHelp />
        </Group>
      </Flex>
    </Group>
  );
};

export default Workload;
