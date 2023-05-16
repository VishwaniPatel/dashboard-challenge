import React from "react";
import { Flex, Group, Text } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
const Time = () => {
  return (
    <Group>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Time
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

export default Time;
