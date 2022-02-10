import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import Symbols from "./Symbols";
import projectData from "../data/project-data.js";
import dlPreviewImage from "../data/basecamp-image.png";
import weatherPreviewImage from "../data/weather-image.png";
import foodPreviewImage from "../data/order-image.png";

function Projects() {
  const images = [dlPreviewImage, weatherPreviewImage, foodPreviewImage];
  const matches = useMediaQuery("(max-width:1000px)");

  return (
    <Grid
      container
      spacing={2}
      direction={matches ? "column" : "row"}
      className="projects"
    >
      <Grid item xs={12}>
        <Symbols />
      </Grid>
      {projectData.map((project, index) => {
        return (
          <>
            <Grid
              item
              container
              xs={12}
              component={Card}
              marginBottom={2}
              marginTop={2}
              direction={matches ? "column" : "row"}
            >
              <Grid item container xs={6}>
                <Grid item xs={12} padding={2}>
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {project.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      height: "300px",
                      width: "400px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={images[index]}
                      alt="null"
                      style={{ marginBottom: "10px" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        width: "50%",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Card sx={{ padding: "10px" }}>
                        <Link href={project.link} underline="hover" sx={{}}>
                          live demo
                        </Link>
                      </Card>
                      <Card sx={{ padding: "10px" }}>
                        <Link href={project.repo} underline="hover">
                          repo
                        </Link>
                      </Card>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} padding={2}>
                  <Typography variant="h6">
                    Frameworks and languages used
                  </Typography>
                  <List>
                    {project.framesandlangs.map((frame) => {
                      return (
                        <ListItem component={Typography} paragraph>
                          <ListItemIcon>
                            <RadioButtonCheckedIcon fontSize="small" />
                          </ListItemIcon>
                          {frame}
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
              <Grid item container xs={6} spacing={3} padding={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">My role</Typography>
                  <Typography paragraph>{project.role}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">The journey</Typography>
                  <Typography paragraph>{project.journey}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">Notable features:</Typography>
                  <List>
                    {project.features.map((feature) => {
                      return (
                        <ListItem component={Typography} paragraph>
                          <ListItemIcon>
                            <RadioButtonCheckedIcon fontSize="small" />
                          </ListItemIcon>
                          {feature}
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}

export default Projects;
