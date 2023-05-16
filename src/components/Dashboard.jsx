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
  },
  card: {
    padding: `${rem(20)}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.darktheme[0] : theme.white,
    borderBottom: `${rem(1)} solid  ${
      theme.colorScheme === "dark"
        ? theme.colors.darktheme[9]
        : theme.colors.darktheme[0]
    }`,
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.darktheme[9]
        : theme.colors.darktheme[0]
    }`,
  },
}));
const Dashboard = () => {
  const { classes, theme } = useStyles();
  return (
    <Grid gutter={0} className={classes.wrapper}>
      <Grid.Col span={4} className={classes.card}>
        <HealthData />
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        <Tasks />
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        <Progress />
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        <Time />
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        <Cost />
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        <Workload />
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
