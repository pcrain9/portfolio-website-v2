import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BackgroundPic from "../data/austin-dark.jpg";
import Linkedin from "../data/linkedin.png";
import Github from "../data/github.png";

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
      <Box
        sx={{
          position: "absolute",
          zIndex: "2002",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          mt: "5px",
          height: "10vh",
        }}
      >
        <Typography
          paragraph
          sx={{
            color: "#ffea00",
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Perry Crain
        </Typography>
        <Box
          sx={{ display: "flex", width: "50%", justifyContent: "space-evenly" }}
        >
          <Typography
            paragraph
            sx={{ color: "#ffea00" }}
            component={Link}
            underline="hover"
            href="https://drive.google.com/file/d/1QeEB7l3W1PkH7rD4P_b5yCDnXslZVBaT/view?usp=sharing"
          >
            Resume
          </Typography>

          <Typography
            paragraph
            sx={{ color: "#ffea00" }}
            component={Link}
            underline="hover"
            href="mailto:pcrain9@gmail.com"
            
          >
            Contact
          </Typography>
        </Box>
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
          backgroundColor: "rgba(0, 0, 0, .5)",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ color: "#ffea00", mb: "5px" }}>
          Full Stack Web Developer
        </Typography>
        <Typography
          paragraph
          sx={{
            color: "#ffea00",
            mb: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FmdGoodIcon sx={{ color: "#ffea00", mb: "5px" }} /> Austin, TX
        </Typography>
        <Box
          sx={{ display: "flex", width: "20%", justifyContent: "space-evenly" }}
        >
          <a href="https://www.github.com/pcrain9">
            <img
              src={Github}
              alt="null"
              style={{ height: "25px", width: "25px", borderRadius: "2px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/perrycrain9">
            <img
              src={Linkedin}
              alt="null"
              style={{ height: "25px", width: "25px" }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default TopNav;
