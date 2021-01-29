import React, { useState, useEffect } from "react";
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
import Collapse from "@material-ui/core/Collapse";
import Contact from "../components/contact";
import MobileContent from "../components/mobile-content";
import "../styles/style.css";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const Content = ({ data, location, width, wasBig, setWasBig }) => {
  const [toTop, setToTop] = useState(null);
  const [banner, setBanner] = useState("default");
  const [find, setFind] = useState(false);
  const [plan, setPlan] = useState(false);
  const [make, setMake] = useState(false);
  const [ship, setShip] = useState(false);
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [start, setStart] = useState(false);
  useEffect(() => {});
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
      setStart(true);
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
      setStart(true);
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
      setStart(true);
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
      setStart(true);
    } else {
      setBanner(`ship`);
      setPlan(false);
      setFind(false);
      setMake(false);
      setShip(true);
      setStart(true);
    }
  };
  let handleP1 = () => {
    setP1(true);
    setP2(false);
    setP3(false);
  };
  let handleP2 = () => {
    setP2(true);
    setP1(false);
    setP3(false);
  };
  let handleP3 = () => {
    setP3(true);
    setP2(false);
    setP1(false);
  };

  return (
    <ReactFullpage
      // Required when using extensions
      pluginWrapper={pluginWrapper}
      //fullpage options
      licenseKey={"8734D589-74E74CC7-AA2B9E45-33B07FC5"}
      scrollingSpeed={500} /* Options here */
      menu="#header"
      anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
      render={({ state, fullpageApi }) => {
        return (
          <>
            <ReactFullpage.Wrapper>
              <div className="section slide-section">
                <Grid item xs={12} className="home-slide">
                  <div className="slide slide-flex">
                    <Grid item lg={12} className="g-row-start1">
                      <Hidden smDown>
                        <Grid item xs={5} className="g-row-cell">
                          <Grid item xs={12} className="g-row-cell-s1">
                            <img
                              src="./static/homeimg1.png"
                              className="s1-image"
                            ></img>
                          </Grid>
                        </Grid>
                      </Hidden>
                      <Grid item sm={10} md={7} className="g-row-cell">
                        <Grid item xs={12} className="s1-p1-move">
                          <Grid
                            item
                            sm={11}
                            md={10}
                            lg={8}
                            className="s1-p1-item"
                          >
                            <h1 className="main-head-h1">
                              Welcome To<br></br>
                              Boomer Vietnam
                            </h1>
                            <div className="divider"></div>
                            <h2 className="headline-text">
                              <span className="headline-text-2">
                                Boomer Vietnam is your partner for any products
                                or services you want from Vietnam. Our large
                                team in Vietnam boasts a staff of manufacturing,
                                technology, packaging, quality inspection, and
                                logistics experts that are Vietnamese locals. We
                                also have a U.S based headquarters to handle all
                                of the details with a working relationship with
                                Vietnam.
                              </span>
                              <br></br>
                            </h2>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="slide slide-flex">
                    <Grid item lg={12} className="g-row-start1">
                      <Grid item xs={5} className="g-row-cell">
                        <Grid item xs={12} className="g-row-cell-s1">
                          <img
                            src="./static/homeimg2.png"
                            className="s1-image"
                          ></img>
                        </Grid>
                      </Grid>

                      <Grid item xs={7} className="g-row-cell">
                        <Grid item xs={12} className="s1-p1-move">
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
                                Manufacturers follow international standards and
                                have proper certifications
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">2</div>
                              <span className="adjust-left">
                                Made in Vietnam label is more appealing in
                                certain markets
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">3</div>
                              <span className="adjust-left">
                                Home to top technology experts in website
                                development, coding, and software engineering
                              </span>
                            </h2>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="slide slide-flex">
                    <Grid item lg={12} className="g-row-start1">
                      <Grid item xs={5} className="g-row-cell">
                        <Grid item xs={12} className="g-row-cell-s1">
                          <img
                            src="./static/homeimg3.png"
                            className="s1-image"
                          ></img>
                        </Grid>
                      </Grid>

                      <Grid item xs={7} className="g-row-cell">
                        <Grid item xs={12} className="s1-p1-move">
                          <Grid item xs={12} className="">
                            <h1>Labor Force</h1>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">1</div>
                              <span className="adjust-left">
                                Large available workforce with
                                government-guaranteed employee rights
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">2</div>
                              <span className="adjust-left">
                                Lower cost of living allows for lower wages and
                                comparatively lower taxes
                              </span>
                            </h2>
                          </Grid>
                          {/*
                                <Grid item xs={12} className="">
                                  <h2 className="headline-text">
                                    <div className="blue-square">3</div>
                                    <span className="adjust-left">
                                      Consectetur Adipiscing
                                    </span>
                                  </h2>
                                </Grid>
                                */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="slide slide-flex">
                    <Grid item lg={12} className="g-row-start1">
                      <Grid item xs={5} className="g-row-cell">
                        <Grid item xs={12} className="g-row-cell-s1">
                          <img
                            src="./static/homeimg4.png"
                            className="s1-image"
                          ></img>
                        </Grid>
                      </Grid>

                      <Grid item xs={7} className="g-row-cell">
                        <Grid item xs={12} className="s1-p1-move">
                          <Grid item xs={12} className="">
                            <h1>
                              Logistics - <br></br>
                              The Finer Details
                            </h1>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">1</div>
                              <span className="adjust-left">
                                Shorter shipping timeframes at lower
                                transportation costs
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">2</div>
                              <span className="adjust-left">
                                Six international airports and 44 seaports
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">3</div>
                              <span className="adjust-left">
                                Flexible manufacturing capacity
                              </span>
                            </h2>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="slide slide-flex">
                    <Grid item lg={12} className="g-row-start1">
                      <Grid item xs={5} className="g-row-cell">
                        <Grid item xs={12} className="g-row-cell-s1">
                          <img
                            src="./static/homeimg5.png"
                            className="s1-image"
                          ></img>
                        </Grid>
                      </Grid>

                      <Grid item xs={7} className="g-row-cell">
                        <Grid item xs={12} className="s1-p1-move">
                          <Grid item xs={12} className="">
                            <h1>
                              Highest Quality Products <br></br>
                              Manufactured in Vietnam
                            </h1>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">1</div>
                              <span className="adjust-left">
                                High-Quality Products Manufactured in Vietnam
                                <br></br>
                                All types of Packaging, Rubber/Plastic,
                                Wood/Construction Materials
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">2</div>
                              <span className="adjust-left">
                                Clothing and Textile, Shoes, Furniture,
                                Electronics
                              </span>
                            </h2>
                          </Grid>
                          <Grid item xs={12} className="">
                            <h2 className="headline-text">
                              <div className="blue-square">3</div>
                              <span className="adjust-left">
                                Coffee / Seafood
                              </span>
                            </h2>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Hidden mdUp>
                  <div>
                    <svg class="arrowsc">
                      <path class="a1" d="M0 0 L30 32 L60 0"></path>
                      <path class="a2" d="M0 20 L30 52 L60 20"></path>
                      <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </div>
                  <div>
                    <svg class="arrowsl">
                      <path class="a1" d="M0 0 L30 32 L60 0"></path>
                      <path class="a2" d="M0 20 L30 52 L60 20"></path>
                      <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </div>
                  <div>
                    <svg class="arrowsr">
                      <path class="a1" d="M0 0 L30 32 L60 0"></path>
                      <path class="a2" d="M0 20 L30 52 L60 20"></path>
                      <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </div>
                </Hidden>
                <Grid item xs={12} className="home-bot">
                  <Hidden smDown>
                    <Grid container className="g-row-start2">
                      {/* <h1>Click to learn more</h1> */}
                      <Grid item xs={12} className="g-row-cell-s2 infographics">
                        <CardGraphic
                          svg="check"
                          h1text="Benefits"
                          h2text="Why Vietnam-Based Manufacturing"
                          link="/#firstPage/1"
                          hasColor={plan}
                          handleChange={() =>
                            handlePlan(fullpageApi.moveTo("firstPage", 1))
                          }
                        />
                        <CardGraphic
                          svg="building"
                          h1text="Labor Force"
                          h2text="Learn About Our Hard Workers"
                          link="/#firstPage/2"
                          hasColor={find}
                          handleChange={() =>
                            handleFind(fullpageApi.moveTo("firstPage", 2))
                          }
                        />
                        <CardGraphic
                          svg="world"
                          h1text="Logistics"
                          h2text="Our Superior Logistic Network With Faster Times And Lower Cost"
                          link="/#firstPage/3"
                          hasColor={make}
                          handleChange={() =>
                            handleMake(fullpageApi.moveTo("firstPage", 3))
                          }
                        />
                        <CardGraphic
                          svg="clipboard"
                          h1text="Product Manufacturing"
                          h2text="Learn About The High Qualitys Made In Vietnam"
                          link="/#firstPage/4"
                          hasColor={ship}
                          handleChange={() =>
                            handleShip(fullpageApi.moveTo("firstPage", 4))
                          }
                        />
                      </Grid>
                    </Grid>
                  </Hidden>
                  <div>
                    <svg class="arrows">
                      <path class="a1" d="M0 0 L30 32 L60 0"></path>
                      <path class="a2" d="M0 20 L30 52 L60 20"></path>
                      <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </div>
                  <div>
                    <svg class="arrows2">
                      <path class="a1" d="M0 0 L30 32 L60 0"></path>
                      <path class="a2" d="M0 20 L30 52 L60 20"></path>
                      <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                  </div>
                </Grid>
              </div>
              {/*
              <div className="section fsection">
                <Grid container className="g-row">
                          <Button variant="contained" className="p1-button">
                            Lorem Ipsum {"\u00A0"}
                            <AddCircleOutlineIcon />
                          </Button>             
                </Grid>
              </div>
              */}
              <div className="section fsection2">
                <div className="p2-background">
                  <section className="section-p2">
                    <Grid container className="g-row">
                      <Grid container className="g-row-start3">
                        <Grid item xs={12} className="g-row-cell">
                          <Hidden mdDown>
                            <Grid item xs={6} className="g-row-cell-boxes">
                              <img
                                src="./static/section2img.png"
                                className="box-image"
                              ></img>
                            </Grid>
                          </Hidden>
                          <Grid
                            item
                            sm={10}
                            md={8}
                            lg={6}
                            className="g-row-cell-boxes2 boxes"
                          >
                            <Grid className="box-container" item lg={12}>
                              <Paper className="box">
                                <CardGraphic
                                  svg="p1"
                                  hasColor2={p1}
                                  h1text={"U.S. Based Headquarters"}
                                  vert={true}
                                  handleChange={handleP1}
                                />
                              </Paper>
                            </Grid>
                            <Grid className="box-container" item lg={12}>
                              <Paper className="box">
                                <CardGraphic
                                  svg="p2"
                                  isBox={true}
                                  hasColor2={p2}
                                  h1text={"Fast Turnaround Time"}
                                  vert={true}
                                  handleChange={handleP2}
                                />
                              </Paper>
                            </Grid>
                            <Grid className="box-container" item lg={12}>
                              <Paper className="box">
                                <CardGraphic
                                  svg="p3"
                                  isBox={true}
                                  hasColor2={p3}
                                  h1text={"Top Manufacturing Practices"}
                                  vert={true}
                                  handleChange={handleP3}
                                />
                              </Paper>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Hidden mdUp>
                      <div>
                        <svg class="arrowsc">
                          <path class="a1" d="M0 0 L30 32 L60 0"></path>
                          <path class="a2" d="M0 20 L30 52 L60 20"></path>
                          <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                      </div>
                    </Hidden>
                    <Hidden smDown>
                      <div>
                        <svg class="arrows">
                          <path class="a1" d="M0 0 L30 32 L60 0"></path>
                          <path class="a2" d="M0 20 L30 52 L60 20"></path>
                          <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                      </div>
                      <div>
                        <svg class="arrows2">
                          <path class="a1" d="M0 0 L30 32 L60 0"></path>
                          <path class="a2" d="M0 20 L30 52 L60 20"></path>
                          <path class="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                      </div>
                    </Hidden>
                  </section>
                </div>
              </div>
              <div className="section fsection">
                <section className="section-p3">
                  <Grid container className="g-row">
                    <Grid container className="g-row-start3">
                      <Grid item xs={12} className="g-row-cell">
                        <Grid
                          item
                          lg={8}
                          md={10}
                          sm={11}
                          className="g-row-cell-boxes2 boxes"
                        >
                          <Grid className="about-container" item lg={12}>
                            <Grid item xs={12}>
                              <h1 className="align-left story-text">
                                Our Story
                              </h1>
                            </Grid>
                            <div className="divider"></div>
                            <Grid item xs={12}>
                              <p className="align-left">
                                Boomer Vietnam partners with the top
                                manufacturing, technology, packaging,
                                inspection, and logistic companies in Vietnam
                                and has manufactured and sold over $50 million
                                worth of products from Vietnam in the last nine
                                months.
                              </p>
                            </Grid>
                            <Grid item xs={12}>
                              <p className="align-left">
                                With fast communication and turn- around time,
                                we can get your samples and price quotes in as
                                little as three weeks. If you decide to select
                                Boomer Vietnam as your partner, our production
                                and delivery times are much faster than the
                                industry standard. Let us prove to you that we
                                can help your business thrive through Vietnam
                                sourcing.
                              </p>
                            </Grid>
                            <Grid item xs={12}>
                              <p className="align-left">
                                As one of the largest and fastest-growing
                                economies in the Asia manufacturing hub, Vietnam
                                has become the go-to country for a variety of
                                product and service categories in recent years.
                                Vietnamese exports to the United States alone
                                are increasing at over 20-30% per year. Many
                                large international brands have moved some or
                                all their manufacturing from China to Vietnam
                                including big names like Samsung®, Nike®,
                                Apple®, and Adidas®.
                              </p>
                            </Grid>
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
                  <Hidden mdUp>
                    <div>
                      <svg class="arrowsc">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                      </svg>
                    </div>
                  </Hidden>
                  <Hidden smDown>
                    <div>
                      <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                      </svg>
                    </div>
                    <div>
                      <svg class="arrows2">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                      </svg>
                    </div>
                  </Hidden>
                </section>
              </div>
              <div className="section fsection">
                <section className="section-p4">
                  <Contact />
                  <Hidden mdUp>
                    <div>
                      <svg class="arrowsc">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                      </svg>
                    </div>
                  </Hidden>
                  <Hidden smDown>
                    <div>
                      <svg class="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                      </svg>
                    </div>
                    <div>
                      <svg class="arrows2">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                      </svg>
                    </div>
                  </Hidden>
                </section>
              </div>
              <div className="section fp-auto-height">
                <Footer fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
};

Content.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Content);
