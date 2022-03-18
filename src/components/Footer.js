import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { scroller } from "react-scroll";

import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {

  function scrollTo() {
    scroller.scrollTo("projects", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <Box sx={{ backgroundColor: "#424242", width: "100%" }}>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                height: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  marginBottom: "5px",
                }}
              >
                <Typography
                  variant="h4"
                  color="#26a69a"
                  sx={{ padding: "30px" }}
                >
                  PC
                </Typography>
              </div>

              <Typography
                paragraph
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CopyrightIcon fontSize="small" sx={{ mr: "2px" }} /> Perry
                Crain, 2022. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item container xs={6} justifyContent="center">
          <Stack >
            <Typography variant="h6" color="#26a69a">
              Contact
            </Typography>
            <Divider />
            <Typography
              paragraph
              component={Link}
              underline="hover"
              href="https://www.linkedin.com/in/perrycrain9/"
            >
              linkedin
            </Typography>
            <Typography
              paragraph
              component={Link}
              underline="hover"
              href="mailto:pcrain9@gmail.com"
            >
              gmail
            </Typography>
          </Stack>
        </Grid>
        <Grid item container xs={6} justifyContent="center">
          <Stack sx={{ }}>
            <Typography variant="h6" color="#26a69a">
              Links
            </Typography>
            <Divider />
            <Typography
              paragraph
              component={Link}
              underline="hover"
              href="https://drive.google.com/file/d/1FcyCdhYFe2uXFjGpvjoVL5BF40qz7S0Y/view?usp=sharing"
            >
              resume
            </Typography>
            <Typography
              paragraph
              component={Link}
              underline="hover"
              href="https://www.linkedin.com/in/perrycrain9/"
            >
              linkedin
            </Typography>
            <Typography
              paragraph
              component={Link}
              underline="hover"
              href="https://www.github.com/pcrain9"
            >
              github
            </Typography>
            <Typography
              paragraph
              color="#bcbcbc"
              onClick={scrollTo}
              sx={{ cursor: "pointer" }}
            >
              back to projects
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
