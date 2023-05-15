import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import {
  IconActivity,
  IconActivityHeartbeat,
  IconAlignCenter,
  IconArticle,
  IconCalendarEvent,
  IconChartBar,
  IconFile,
  IconList,
} from "@tabler/icons-react";

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
        ? theme.colors.dark[0]
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

// interface HeaderUI {
//   links: { link: string; label: string }[];
// }

export function HeaderUI({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  //   const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  //   const items = links.map((link) => (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={cx(classes.link, {
  //         [classes.linkActive]: active === link.link,
  //       })}
  //       onClick={(event) => {
  //         event.preventDefault();
  //         setActive(link.link);
  //       }}
  //     >
  //       {link.label}
  //     </a>
  //   ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Text>Govalle Construction </Text>
        <Group spacing={5} className={classes.links}>
          <IconList />
          <IconChartBar />
          <IconAlignCenter />
          <IconArticle />
          <IconActivity />
          <IconCalendarEvent />
          <IconFile />
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
