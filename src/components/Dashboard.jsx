import React from "react";
import { Grid, createStyles, rem } from "@mantine/core";
import HealthData from "./HealthData";
import Tasks from "./Tasks";
import Progress from "./Progress";
import Cost from "./Cost";
import Time from "./Time";
import Workload from "./Workload";
const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
    paddingTop: 60,
  },

  borderBottom: {
    borderBottom: `${rem(1)} solid  ${
      theme.colorScheme === "dark"
        ? theme.colors.darktheme[9]
        : theme.colors.darktheme[0]
    }`,
  },
  borderRight: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.darktheme[9]
        : theme.colors.darktheme[0]
    }`,
  },
  card: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    padding: `${rem(20)}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.darktheme[0] : theme.white,
    [theme.fn.smallerThan("lg")]: {
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.darktheme[9]
          : theme.colors.darktheme[0]
      }`,
    },
  },
}));
const Dashboard = () => {
  const { classes, theme } = useStyles();
  return (
    <Grid gutter={0} className={classes.wrapper}>
      <Grid.Col
        md={6}
        lg={4}
        className={`${classes.card} ${classes.borderBottom} ${classes.borderRight}`}
      >
        <HealthData />
      </Grid.Col>
      <Grid.Col
        md={6}
        lg={4}
        className={`${classes.card} ${classes.borderBottom} ${classes.borderRight}`}
      >
        <Tasks />
      </Grid.Col>
      <Grid.Col
        md={6}
        lg={4}
        className={`${classes.card} ${classes.borderBottom}`}
      >
        <Progress />
      </Grid.Col>
      <Grid.Col
        md={6}
        lg={4}
        className={`${classes.card} ${classes.borderRight}`}
      >
        <Time />
      </Grid.Col>
      <Grid.Col
        md={6}
        lg={4}
        className={`${classes.card} ${classes.borderRight}`}
      >
        <Cost />
      </Grid.Col>
      <Grid.Col md={6} lg={4} className={classes.card}>
        <Workload />
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
