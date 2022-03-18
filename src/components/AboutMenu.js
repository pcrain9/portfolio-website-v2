import React, { useState, useEffect, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import { scroller } from "react-scroll";

function AboutMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function scrollTo() {
    scroller.scrollTo("projects", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div>
      <MenuIcon
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ cursor: "pointer" }}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        style={{ zIndex: "5000" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
            sx={{ zIndex: "5000" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <Link
                      sx={{ color: "black" }}
                      underline="none"
                      href="https://drive.google.com/file/d/1FcyCdhYFe2uXFjGpvjoVL5BF40qz7S0Y/view?usp=sharing"
                    >
                      Resume
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      sx={{ color: "black" }}
                      underline="none"
                      href="mailto:pcrain9@gmail.com"
                    >
                      Contact
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      sx={{ color: "black" }}
                      underline="none"
                      onClick={scrollTo}
                    >
                      Projects
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      sx={{ color: "black" }}
                      underline="none"
                      href="https://www.linkedin.com/in/perrycrain9/"
                    >
                      Linkedin
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      sx={{ color: "black" }}
                      underline="none"
                      href="https://www.github.com/pcrain9"
                    >
                      Github
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default AboutMenu;
