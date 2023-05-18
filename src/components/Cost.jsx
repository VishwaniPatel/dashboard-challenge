import React from "react";
import { Flex, Group, Text, createStyles } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconHelp,
  IconSettings,
} from "@tabler/icons-react";
const Cost = () => {
  const useStyles = createStyles((theme) => ({
    icons: {
      color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
    },
  }));
  const { classes } = useStyles();
  return (
    <Group>
      <Flex justify={"space-between"} w={"100%"}>
        <Text fw={700} size={25}>
          Cost
        </Text>
        <Group>
          <IconArrowsMaximize className={classes.icons} stroke={1} />
          <IconSettings className={classes.icons} stroke={1} />
          <IconHelp className={classes.icons} stroke={1} />
        </Group>
      </Flex>
    </Group>
  );
};

export default Cost;
