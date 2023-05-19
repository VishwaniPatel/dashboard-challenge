import { useState } from "react";
import {
  createStyles,
  Header,
  Menu,
  Group,
  Burger,
  rem,
  Text,
  Grid,
  Flex,
  Avatar,
} from "@mantine/core";
import userImg from "../assets/images/Profile.png";
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
  wrapper: {
    background:
      theme.colorScheme === "dark" ? theme.colors.darktheme[0] : theme.white,
    height: 60,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : "black"
    }`,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background:
      theme.colorScheme === "dark" ? theme.colors.darktheme[0] : theme.white,
    color: theme.colorScheme === "dark" ? "white" : "black",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(16)} ${rem(16)}`,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? "white" : "black",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  linkIcon: {
    color: theme.colorScheme === "dark" ? "#b6bdc6" : "black",
  },
  linkActive: {
    "&, &:hover": {
      border: `${rem(1)} solid #cbfa60`,
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderUI() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header px={20} py={10} className={classes.wrapper}>
      <Grid className={classes.header}>
        <Grid.Col span={4}>
          <Flex>
            <Text size={25} mr={20} className={classes.links}>
              Govalle Construction
            </Text>
            <Avatar.Group spacing="sm">
              <Avatar src={userImg} alt="user" radius="xl" />
              <Avatar color="#447c9e" radius="xl">
                GP
              </Avatar>
            </Avatar.Group>
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} className={classes.links} p={0}>
          <Group spacing={10}>
            <Flex justify={"space-between"}>
              <a className={classes.link}>
                <IconList stroke={1.5} className={classes.linkIcon} size={20} />
              </a>
              <a className={classes.link}>
                <IconChartBar
                  stroke={1.5}
                  className={classes.linkIcon}
                  size={20}
                />
              </a>
              <a className={classes.link}>
                <IconAlignCenter
                  stroke={1.5}
                  className={classes.linkIcon}
                  size={20}
                />
              </a>
              <a className={classes.link}>
                <IconArticle
                  stroke={1.5}
                  className={classes.linkIcon}
                  size={20}
                />
              </a>
              <a className={`${classes.link} ${classes.linkActive}`}>
                <IconActivity
                  stroke={1.5}
                  className={classes.linkIcon}
                  size={20}
                />
              </a>
              <a className={classes.link}>
                <IconCalendarEvent
                  stroke={1.5}
                  className={classes.linkIcon}
                  size={20}
                />
              </a>
              <a className={classes.link}>
                <IconFile stroke={1.5} className={classes.linkIcon} size={20} />
              </a>
            </Flex>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex justify={"end"}>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  className={classes.burger}
                  size="sm"
                />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconList size={14} />}>
                  List of Activities
                </Menu.Item>
                <Menu.Item icon={<IconChartBar size={14} />}>
                  Activities
                </Menu.Item>
                <Menu.Item icon={<IconAlignCenter size={14} />}>
                  Dashboard
                </Menu.Item>
                <Menu.Item icon={<IconArticle size={14} />}>Article</Menu.Item>
                <Menu.Item icon={<IconCalendarEvent size={14} />}>
                  Calender
                </Menu.Item>
                <Menu.Item icon={<IconFile size={14} />}>My Files</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <ThemeChangeButton />
          </Flex>
        </Grid.Col>
      </Grid>
    </Header>
  );
}
