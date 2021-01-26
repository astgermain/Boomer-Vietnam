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
import Slide from "@material-ui/core/Slide";
import Contact from "../components/contact";
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
  const [banner, setBanner] = useState("default");
  const [find, setFind] = useState(false);
  const [plan, setPlan] = useState(false);
  const [make, setMake] = useState(false);
  const [ship, setShip] = useState(false);
  const [start, setStart] = useState(false);
  let handleBack = () => {
    setBanner(`default`);
    setPlan(false);
    setFind(false);
    setMake(false);
    setShip(false);
  };
  let handlePlan = () => {
    if (banner == "plan") {
      setBanner(`default`);
      setPlan(false);
      setStart(false);
    } else {
      setBanner(`plan`);
      setPlan(true);
      setFind(false);
      setMake(false);
      setShip(false);
      setStart(true);
    }
  };
  let handleFind = () => {
    if (banner == "find") {
      setBanner(`default`);
      setFind(false);
      setStart(false);
    } else {
    setBanner(`find`);
    setPlan(false);
    setFind(true);
    setMake(false);
    setShip(false);
    setStart(true);
    }
  };
  let handleMake = () => {
    if (banner == "make") {
      setBanner(`default`);
      setMake(false);
      setStart(false);
    } else {
    setBanner(`make`);
    setPlan(false);
    setFind(false);
    setMake(true);
    setShip(false);
    setStart(true);
    }
  };
  let handleShip = () => {
    if (banner == "ship") {
      setBanner(`default`);
      setShip(false);
      setStart(false);
    } else {
    setBanner(`ship`);
    setPlan(false);
    setFind(false);
    setMake(false);
    setShip(true);
    setStart(true);
    }
  };
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
                    {banner == "default" && (
                      <Slide
                        direction="left"
                        in={true}
                        appear={start}
                        timeout={750}
                        mountOnEnter
                        unmountOnExit
                      >
                        <Grid container lg={12} className="g-row-start1">
                          <Grid container xs={5} className="g-row-cell">
                            <Grid item xs={12} className="g-row-cell-s1">
                              <img
                                src="./static/homeimg1.png"
                                className="s1-image"
                              ></img>
                            </Grid>
                          </Grid>
                          <Grid container xs={7} className="g-row-cell">
                            <Grid container xs={12} className="s1-p1-move">
                              <Grid item xs={12} className="">
                                <h1>
                                  Politically Stable,<br></br>
                                  Business Friendly
                                </h1>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">1</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">2</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">3</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Slide>
                    )}
                    {banner == "plan" && (
                      <Slide
                        direction="left"
                        in={true}
                        appear={start}
                        timeout={750}
                        mountOnEnter
                        unmountOnExit
                      >
                        <Grid container lg={12} className="g-row-start1">
                          <Grid container xs={5} className="g-row-cell">
                            <Grid item xs={12} className="g-row-cell-s1">
                              <img
                                src="./static/homeimg2.png"
                                className="s1-image"
                              ></img>
                            </Grid>
                          </Grid>

                          <Grid container xs={7} className="g-row-cell">
                            <Grid container xs={12} className="s1-p1-move">
                              <Grid item xs={12} className="">
                                <h1>
                                  Politically Stable,<br></br>
                                  Business Friendly
                                </h1>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">1</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">2</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">3</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Slide>
                    )}
                    {banner == "find" && (
                      <Slide
                        direction="left"
                        in={true}
                        appear={start}
                        timeout={750}
                        mountOnEnter
                        unmountOnExit
                      >
                        <Grid container lg={12} className="g-row-start1">
                          <Grid container xs={5} className="g-row-cell">
                            <Grid item xs={12} className="g-row-cell-s1">
                              <img
                                src="./static/homeimg3.png"
                                className="s1-image"
                              ></img>
                            </Grid>
                          </Grid>

                          <Grid container xs={7} className="g-row-cell">
                            <Grid container xs={12} className="s1-p1-move">
                              <Grid item xs={12} className="">
                                <h1>
                                  Politically Stable,<br></br>
                                  Business Friendly
                                </h1>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">1</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">2</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">3</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Slide>
                    )}
                    {banner == "make" && (
                      <Slide
                        direction="left"
                        in={true}
                        appear={start}
                        timeout={750}
                        mountOnEnter
                        unmountOnExit
                      >
                        <Grid container lg={12} className="g-row-start1">
                          <Grid container xs={5} className="g-row-cell">
                            <Grid item xs={12} className="g-row-cell-s1">
                              <img
                                src="./static/homeimg4.png"
                                className="s1-image"
                              ></img>
                            </Grid>
                          </Grid>

                          <Grid container xs={7} className="g-row-cell">
                            <Grid container xs={12} className="s1-p1-move">
                              <Grid item xs={12} className="">
                                <h1>
                                  Politically Stable,<br></br>
                                  Business Friendly
                                </h1>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">1</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">2</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">3</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Slide>
                    )}
                    {banner == "ship" && (
                      <Slide
                        direction="left"
                        in={true}
                        appear={start}
                        timeout={750}
                        mountOnEnter
                        unmountOnExit
                      >
                        <Grid container lg={12} className="g-row-start1">
                          <Grid container xs={5} className="g-row-cell">
                            <Grid item xs={12} className="g-row-cell-s1">
                              <img
                                src="./static/homeimg5.png"
                                className="s1-image"
                              ></img>
                            </Grid>
                          </Grid>

                          <Grid container xs={7} className="g-row-cell">
                            <Grid container xs={12} className="s1-p1-move">
                              <Grid item xs={12} className="">
                                <h1>
                                  Politically Stable,<br></br>
                                  Business Friendly
                                </h1>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">1</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">2</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                              <Grid item xs={12} className="">
                                <h2 className="headline-text">
                                  <div className="blue-square">3</div>
                                  <span className="adjust-left">
                                    Consectetur Adipiscing
                                  </span>
                                </h2>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Slide>
                    )}

                    {/*
                          <Button variant="contained" className="p1-button">
                            Lorem Ipsum {"\u00A0"}
                            <AddCircleOutlineIcon />
                          </Button>
                          */}
                    <Grid container className="g-row-start2">
                      {/* <h1>Click to learn more</h1> */}
                      <Grid
                        container
                        xs={12}
                        className="g-row-cell-s2 infographics"
                      >
                        <CardGraphic
                          svg="check"
                          h1text="Plan"
                          h2text="Product Planning + Validation"
                          hasColor={plan}
                          handleChange={handlePlan}
                        />
                        <CardGraphic
                          svg="building"
                          h1text="Find"
                          h2text="Sourcing + Samples"
                          hasColor={find}
                          handleChange={handleFind}
                        />
                        <CardGraphic
                          svg="world"
                          h1text="Make"
                          h2text="Inspection + Production"
                          hasColor={make}
                          handleChange={handleMake}
                        />
                        <CardGraphic
                          svg="clipboard"
                          h1text="Ship"
                          h2text="Shipping + Prep Guidance"
                          hasColor={ship}
                          handleChange={handleShip}
                        />
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
              <div className="section fsection fp-auto-height">
                <section className="">
                  <Contact />
                  <Footer fullpageApi={fullpageApi} />
                </section>
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
