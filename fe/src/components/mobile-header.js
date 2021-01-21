import React, { useState } from "react";
import { Helmet } from "react-helmet";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "../styles/header.css";
import Logo from "../../public/static/BoomerVietnam.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const MobileHeader = ({fullpageApi}) => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const [opened, setOpened] = useState(false);
  const preventDefault = (event) => event.preventDefault();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setOpened(!opened);
  };
  const moveTo1 = () => {
    fullpageApi.moveTo(1)
  }
  const moveTo2 = () => {
    fullpageApi.moveTo(2)
  }
  const moveTo3 = () => {
    fullpageApi.moveTo(3)
  }
  const moveTo4 = () => {
    fullpageApi.moveTo(4)
  }
  let anchor = "right";
  let menuIcon = () => {
    if (opened) {
      return <CancelPresentationIcon />;
    } else {
      return <MenuIcon />;
    }
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button onClick={toggleDrawer(anchor, true)}>{menuIcon()}</Button>
        </Grid>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}Î
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <header className="header">
      <Container
        maxWidth={false}
        style={{ backgroundColor: "white", height: "100px", padding: "0", marginLeft: "12.5vw", marginRight: "12.5vw" }}
      >
        <Typography
          component="div"
          style={{ backgroundColor: "white", height: "100px", display: "flex" }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            xs={12}
          >
            <Link href="#" onClick={moveTo1}>
              <img src={Logo} alt="Logo" />
            </Link>
            <Button className="ham-button-m" onClick={toggleDrawer(anchor, true)}>{menuIcon()}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
          </Grid>
          
        </Typography>
      </Container>
    </header>
  );
};

export default MobileHeader;
