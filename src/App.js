import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopNav from "./components/TopNav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  const theme = createTheme({
    palette:{
      primary:{
        main:"#bcbcbc",
        contrastText:"#000000"
      },
      secondary:{
        main:"#26a69a",
        contrastText:"#000000"
      },
      yellow:{
        main:"#ffea00",
        contrastText:"#000000"
      }
    },
    typography:{
      fontFamily:['Manrope', 'sans-serif'].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <TopNav />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
