import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import Header from "../components/header";
import MobileHeader from "../components/mobile-header";
import Footer from "../components/footer";
import CardGraphic from "../components/card";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import "../styles/style.css";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const IndexPage = ({ data, location, width }) => {
  const [toTop, setToTop] = useState(null);
  return (
    <>
      <title>Boomer Vietnam</title>
      <Hidden mdUp>
        <MobileHeader />
      </Hidden>
      <Hidden smDown>
      <Header fullpageApi={toTop} />
      </Hidden>
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        pluginWrapper={pluginWrapper}
        //fullpage options
        licenseKey={"8734D589-74E74CC7-AA2B9E45-33B07FC5"}
        scrollingSpeed={750} /* Options here */
        render={({ state, fullpageApi }) => {
          setToTop(fullpageApi);
          return (
            <ReactFullpage.Wrapper>
              <div className="section fsection fp-auto-height">
                {/*
                <Typography variant="h1" component="h2">
                  Boomer Vietnam
                </Typography>
                
                
      
      */}
                <Grid container className="g-row">
                  <Hidden smDown>
                    <Grid container lg={12} className="g-row-start1">
                      <Grid container xs={5} className="g-row-cell">
                        <Grid item xs={12} className="s1-p1-move">
                          <h1 className="s1-p1-text">
                            Consectetur<br></br>
                            Adipiscing
                          </h1>
                          <Button variant="contained" className="p1-button">
                            Lorem Ipsum {"\u00A0"}
                            <AddCircleOutlineIcon />
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={7} className="g-row-cell-s1">
                        <img
                          src="./static/section1img.png"
                          className="s1-image"
                        ></img>
                      </Grid>
                    </Grid>
                    <Grid container className="g-row-start2">
                      <Grid
                        container
                        xs={12}
                        className="g-row-cell-s2 infographics"
                      >
                        <CardGraphic svg="check" />
                        <CardGraphic svg="building" hasColor={true} />
                        <CardGraphic svg="world" />
                        <CardGraphic svg="clipboard" />
                      </Grid>
                    </Grid>
                  </Hidden>
                  {/*
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
                  */}
                </Grid>
              </div>
              <div className="section fsection2 fp-auto-height">
                <div className="p2-background">
                  <section className="section-p2">
                    <Grid container className="g-row">
                      <Grid container className="g-row-start3">
                        <Grid container xs={12} className="g-row-cell">
                          <Grid container xs={6} className="g-row-cell-boxes">
                            <img
                              src="./static/section2img.png"
                              className="box-image"
                            ></img>
                          </Grid>
                          <Grid
                            container
                            xs={6}
                            className="g-row-cell-boxes2 boxes"
                          >
                            <Grid className="box-container" container lg={12}>
                              <Paper className="box">
                                <CardGraphic svg="check" isBox={true} />
                              </Paper>
                            </Grid>
                            <Grid className="box-container" container lg={12}>
                              <Paper className="box">
                                <CardGraphic svg="building" hasColor2={true} />
                              </Paper>
                            </Grid>
                            <Grid className="box-container" container lg={12}>
                              <Paper className="box">
                                <CardGraphic svg="world" isBox={true} />
                              </Paper>
                            </Grid>
                            <Grid className="box-container" container lg={12}>
                              <Paper className="box">
                                <CardGraphic svg="clipboard" isBox={true} />
                              </Paper>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      {/*
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
                  */}
                    </Grid>
                  </section>
                </div>
              </div>
              <div className="section fsection fp-auto-height">
                <section className="section-p3">
                  <Grid container className="g-row">
                    <Grid container className="g-row-start3">
                      <Grid container xs={12} className="g-row-cell">
                        <Grid container xs={6} className="g-row-cell-boxes">
                          <img
                            src="./static/section3img.png"
                            className="box-image"
                          ></img>
                        </Grid>
                        <Grid
                          container
                          xs={6}
                          className="g-row-cell-boxes2 boxes"
                        >
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="check" isBox={true} />
                            </Paper>
                          </Grid>
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="building" hasColor2={true} />
                            </Paper>
                          </Grid>
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="world" isBox={true} />
                            </Paper>
                          </Grid>
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="clipboard" isBox={true} />
                            </Paper>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/*
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
                  */}
                  </Grid>
                </section>
              </div>

              <div className="section fp-auto-height">
                <Footer fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

IndexPage.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(IndexPage);
