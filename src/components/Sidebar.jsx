import {
  createStyles,
  Navbar,
  Flex,
  Text,
  Stack,
  getStylesRef,
  rem,
  Avatar,
} from "@mantine/core";
import {
  IconHome,
  IconClock,
  IconUsers,
  IconBriefcase,
  IconPlus,
  IconHelpCircle,
} from "@tabler/icons-react";

import userImg from "../assets/images/Profile.png";

const useStyles = createStyles((theme) => ({
  sidebar: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    backgroundColor: theme.colorScheme === "dark" ? "black" : "white",

    borderRight: `${rem(1)} solid black`,
  },
  logo: {
    height: 60,
    width: 60,
    padding: 10,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : "black"
    }`,
  },
  logoTitle: {
    height: 40,
    width: 40,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? "white" : "black"
    }`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  box: {
    paddingBottom: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : "black"
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    display: "flex",
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? "white" : "black",
    padding: `${rem(15)} ${rem(15)}`,

    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? "white" : "black",

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? "white" : "black",
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color: theme.colorScheme === "dark" ? "white" : "black",
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

export function Sidebar() {
  const { classes } = useStyles();

  return (
    <Navbar width={{ base: 60 }} className={classes.sidebar}>
      <Navbar.Section className={classes.logo}>
        <div className={classes.logoTitle}>
          <Text>PM</Text>
          {/* <Avatar size="md" radius="xl" color="white">
            PM
          </Avatar> */}
        </div>
      </Navbar.Section>
      <Navbar.Section className={classes.box}>
        <a className={classes.link}>
          <IconHome className={classes.linkIcon} stroke={1.5} />
        </a>
        <a className={classes.link}>
          <IconClock className={classes.linkIcon} stroke={1.5} />
        </a>
      </Navbar.Section>
      <Navbar.Section>
        <a className={classes.link}>
          <IconUsers className={classes.linkIcon} stroke={1.5} />
        </a>
        <a className={classes.link}>
          <IconBriefcase className={classes.linkIcon} stroke={1.5} />
        </a>
      </Navbar.Section>

      <Navbar.Section grow className={classes.footer}>
        <Stack justify="flex-end">
          <a className={classes.link}>
            <IconPlus className={classes.linkIcon} stroke={1.5} />
          </a>

          <a className={classes.link}>
            <IconHelpCircle className={classes.linkIcon} stroke={1.5} />
          </a>
          <a className={classes.link}>
            <Avatar src={userImg} alt="user" size="sm" radius="xl" />
          </a>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
