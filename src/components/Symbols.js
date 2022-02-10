import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import reactImage from "../data/react.png";
import muiImage from "../data/mui.png";
import typescriptImage from "../data/typescript.png";
import nodeImage from "../data/node.jpg";
import htmlImage from "../data/html.png";
import cssImage from "../data/css.png";
import formikImage from "../data/formik.png";
import jsImage from "../data/javascript.png";

const imgStyle = { height: "30px", width: "30px" };
const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding:"20px"
};
function Symbols() {
  return (
    <>
      <Box sx={containerStyle}>
          <img src={reactImage} alt="null" style={imgStyle} />
          <img src={jsImage} alt="null" style={imgStyle} />
          <img src={htmlImage} alt="null" style={imgStyle} />
          <img src={cssImage} alt="null" style={imgStyle} />
          <img src={muiImage} alt="null" style={imgStyle} />
          {<img src={nodeImage} alt="null" style={imgStyle} />}
          <img src={typescriptImage} alt="null" style={imgStyle} />
          <img src={formikImage} alt="null" style={imgStyle} />
      </Box>
    </>
  );
}

export default Symbols;
