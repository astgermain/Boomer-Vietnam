import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  let content;
  if (isRootPath) {
    content = children;
  } else {
    content = (
      <>
      <Header />
      {children}
      <Footer />
      </>
    )
  }
  

  return (
    <ThemeProvider theme={theme}>
    <main className="main">
      
      <Helmet>
      <title>Boomer Vietnam</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>

      <CssBaseline />
      
        
        {content}
    </main>
    </ThemeProvider>
  );
};

export default Layout;
