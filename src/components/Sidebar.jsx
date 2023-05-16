import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
} from "@mantine/core";
import {
  IconDeviceDesktopAnalytics,
  IconHome,
  IconClock,
  IconUsers,
  IconBriefcase,
  IconPlus,
  IconHelpCircle,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  sidebar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.black[0] : theme.white[0],
  },
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${rem(15)} ${rem(15)}`,

    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    // marginRight: theme.spacing.sm,
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

const data = [
  { link: "", icon: IconHome },
  { link: "", icon: IconClock },
  { link: "", icon: IconUsers },
  { link: "", icon: IconBriefcase },
];

export function Sidebar() {
  const { classes, cx } = useStyles();

  const links = data.map((item, index) => (
    <a className={cx(classes.link)} key={index}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
    </a>
  ));

  return (
    <Navbar width={{ base: 60 }} className={classes.sidebar}>
      <Navbar.Section className={classes.header}>{links}</Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <a className={classes.link}>
          <IconPlus className={classes.linkIcon} stroke={1.5} />
        </a>

        <a className={classes.link}>
          <IconHelpCircle className={classes.linkIcon} stroke={1.5} />
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
