import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SVG from "./svgs";
import Grid from "@material-ui/core/Grid";

import "../styles/card.css";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    backgroundColor: "#FAFAFA",
    height: "15vw",
    width: "15vw",
    minWidth: "15vh",
    minHeight: "15vh",
    maxWidth: "250px",
    maxHeight: "250px",
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardGraphic({ hasColor, svg, hasColor2, isBox }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let g = classes.root;
  let h, i, j, k;
  if (hasColor) {
    g = `hasColor`;
    k = `colorText`;
    h = `card-content`;
    i = `top-content`;
    j = `bottom-content`;
  } else if (hasColor2) {
    g = `hasColorBox box`;
    h = `card-content2`;
    i = `top-content2`;
    j = `bottom-content2`;
    k = `colorText`;
  } else if (isBox) {
    g = `box`;
    h = `card-content2`;
    i = `top-content2`;
    j = `bottom-content2`;
  } else {
    h = `card-content`;
    i = `top-content`;
    j = `bottom-content`;
  }
  return (
    <Card className={g} variant="outlined">
      <CardContent className={h}>
        <div className={i}>
          <SVG name={svg} />
        </div>
        <div className={j}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={`${classes.title} first-card-text ${k}`}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                component="p"
                className={`second-card-text ${k}`}
              >
                well meaning and kindly.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </CardContent>
      {/*
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      */}
    </Card>
  );
}
