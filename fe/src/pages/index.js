import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import Header from "../components/header";
import MobileHeader from "../components/mobile-header";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Content from "../components/content";
import "../styles/style.css";


const IndexPage = () => {

  return (
    <>
      <title>Boomer Vietnam</title>
      <Hidden mdUp>
        <MobileHeader />
      </Hidden>
      <Hidden smDown>
        <Header />
      </Hidden>
      
      <Content />
    </>
  );
};



export default IndexPage;
