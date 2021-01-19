import * as React from "react";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";


const IndexPage = ({ data, location }) => {
  return (
    <>
      <title>Home Page</title>
      <Typography variant="h1" component="h2">
        Boomer Vietnam
      </Typography>
      <Button variant="contained">
        Lorem Ipsum {'\u00A0'}<AddCircleOutlineIcon />
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>xs=12 md=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default IndexPage;
