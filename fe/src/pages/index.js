import * as React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import Header from "../components/header";
import Footer from "../components/footer";
import CardGraphic from "../components/card";
import "../styles/home.css";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

const IndexPage = ({ data, location }) => {
  return (
    <>
      <title>Boomer Vietnam</title>
      <Header />
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        pluginWrapper={pluginWrapper}
        //fullpage options
        licenseKey={"8734D589-74E74CC7-AA2B9E45-33B07FC5"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section fp-auto-height">
                {/*
                <Typography variant="h1" component="h2">
                  Boomer Vietnam
                </Typography>
                
                
      <Button variant="contained">
        Lorem Ipsum {"\u00A0"}
        <AddCircleOutlineIcon />
      </Button>
      */}
                <Grid container className="g-row">
                  <Grid container className="g-row-start1">
                    <Grid item xs={5} className="g-row-cell blue">
                      <div>
                        <span>xs=5</span>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                          Click me to move down
                        </button>
                      </div>
                    </Grid>
                    <Grid item xs={7} className="g-row-cell green">
                      <span>xs=7</span>
                    </Grid>
                  </Grid>
                  <Grid container className="g-row-start2">
                    <Grid container xs={12} className="g-row-cell infographics">
                      <CardGraphic svg="check" />
                      <CardGraphic svg="building" hasColor={true} />
                      <CardGraphic svg="world" />
                      <CardGraphic svg="clipboard" />
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
              </div>
              <div className="section fp-auto-height">
                <section className="section-p2">
                  <Grid container className="g-row">
                    <Grid container className="g-row-start3">
                      <Grid container xs={12} className="g-row-cell">
                        <Grid container xs={6} className="g-row-cell">
                          <span>left photo</span>
                        </Grid>
                        <Grid container xs={6} className="g-row-cell boxes">
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="check" isBox={true}/>
                            </Paper>
                          </Grid>
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="building" hasColor2={true} />
                            </Paper>
                          </Grid>
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="world" isBox={true}/>
                            </Paper>
                          </Grid>
                          <Grid className="box-container" container lg={12}>
                            <Paper className="box">
                              <CardGraphic svg="clipboard" isBox={true}/>
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
                <section className="section-p3 yellow">hihi</section>
              </div>
              <div className="section purple fp-auto-height">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      <Footer />
    </>
  );
};

export default IndexPage;
