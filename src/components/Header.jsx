import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
  Text,
  Grid,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconActivity,
  IconAlignCenter,
  IconArticle,
  IconCalendarEvent,
  IconChartBar,
  IconFile,
  IconList,
} from "@tabler/icons-react";
import ThemeChangeButton from "./ThemeChangeButton";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderUI({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <Header height={60} px={20} py={10}>
      <Grid className={classes.header}>
        <Grid.Col span={4}>
          <Text fs={40}>Govalle Construction </Text>
        </Grid.Col>
        <Grid.Col span={4} className={classes.links}>
          <Group spacing={10} className={classes.link}>
            <Flex justify={"space-between"}>
              <IconList />
              <IconChartBar />
              <IconAlignCenter />
              <IconArticle />
              <IconActivity />
              <IconCalendarEvent />
              <IconFile />
            </Flex>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex justify={"end"}>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
            <ThemeChangeButton />
          </Flex>
        </Grid.Col>
      </Grid>
    </Header>
  );
}
