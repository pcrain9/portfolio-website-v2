import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BackgroundPic from "../data/austin-dark.jpg";
import Linkedin from "../data/linkedin.png";
import Github from "../data/github.png";
import pcAvatar from "../data/pc-photo.jpg";

import AboutMenu from "./AboutMenu";

function TopNav() {
  const matches = useMediaQuery("(max-width:1000px)");

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        width: "100%",
        height: "50vh",
        paddingBottom: matches ? "0vh" : "35vh",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "1000",
          height: matches ? "40vh" : "80vh",
        }}
        src={BackgroundPic}
        alt="null"
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="absolute"
          sx={{ zIndex: "2010", backgroundColor: "transparent", mt: "0px" }}
        >
          <Toolbar sx={{ width:matches ? "50%" : "20%", height:"50px", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            
              <AboutMenu />
              <Avatar alt="Perry Crain" src={pcAvatar} sx={{position:"relative", zIndex:"3000"}} />
            <Typography
              paragraph
              sx={{
                color: "#ffea00",
                mt:"10px"
              }}
            >
              Perry Crain
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      

      
      <Box
        sx={{
          position: "absolute",
          zIndex: "2001",
          width: "100%",
          height: matches ? "40vh" : "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ color: "#ffea00", mb: "10px" }}>
          Full Stack Web Developer
        </Typography>
        <Typography
          paragraph
          sx={{
            color: "#ffea00",
            mb: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FmdGoodIcon sx={{ color: "#ffea00", mb: "10px" }} /> Austin, TX
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: matches ? "40%" : "20%",
            justifyContent: "space-evenly",
          }}
        >
          <a href="https://www.github.com/pcrain9">
            <img
              src={Github}
              alt="null"
              style={{ height: "40px", width: "40px", borderRadius: "2px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/perrycrain9">
            <img
              src={Linkedin}
              alt="null"
              style={{ height: "40px", width: "40px" }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default TopNav;
