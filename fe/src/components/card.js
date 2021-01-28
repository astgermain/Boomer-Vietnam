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
    height: "22.5vh",
    width: "22.5vh",
    minWidth: "12.5vh",
    minHeight: "12.5vh",
    maxWidth: "16.5vw",
    maxHeight: "16.5vw",
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

export default function CardGraphic({
  hasColor,
  svg,
  hasColor2,
  isBox,
  handleChange,
  h1text,
  h2text,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let g = classes.root;
  let h, i, j, k, svgColor;
  if (hasColor) {
    g = `hasColor`;
    h = `card-content`;
    i = `top-content`;
    j = `bottom-content`;
    svgColor = "white"
  } else if (hasColor2) {
    g = `hasColorBox box`;
    h = `card-content2`;
    i = `top-content2`;
    j = `bottom-content2`;
    svgColor = "white"
  } else if (isBox) {
    g = `box`;
    h = `card-content2`;
    i = `top-content2`;
    j = `bottom-content2`;
    k = `colorText`;
    j = `colorText2`
    svgColor = "white"
  } else {
    h = `card-content`;
    i = `top-content`;
    j = `bottom-content`;
    k = `colorText`;
    j = `colorText2`
  }
  return (
    <Button size="small" onClick={handleChange} className="card-button">
      <Card className={g} variant="outlined">
        <CardContent className={h}>
          
          <div className={j}>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <SVG name={svg} color={svgColor}/>
              </Grid>
              <Grid item xs={12} className="card-flex">
                <Typography
                  className={`${classes.title} first-card-text ${k}`}
                  color="textSecondary"
                  gutterBottom
                >
                  {h1text}
                </Typography>
              </Grid>
              <Grid item xs={12} className="card-flex2">
                <Typography
                  variant="body2"
                  component="p"
                  className={`second-card-text ${j}`}
                >
                  {h2text}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </Button>
  );
}
