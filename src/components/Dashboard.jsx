import React from "react";
import { Grid, createStyles, rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
  },
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));
const Dashboard = () => {
  const { classes, theme } = useStyles();
  return (
    <Grid gutter={0} className={classes.wrapper}>
      <Grid.Col span={4} className={classes.card}>
        1
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        2
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        3
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        4
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        5
      </Grid.Col>
      <Grid.Col span={4} className={classes.card}>
        6
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
