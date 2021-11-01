import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import ".././App.css";

export default function Nav() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Projects", "Connect"].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div className="row" style={{ backgroundColor: "#2A2A2A" }}>
        <div className="col text-center text-white py-2">
          <span className="h3">Stephen Wuh</span>
          <br />
          <span style={{ fontSize: "1rem" }}>
            Web Developer | Software Engineer
          </span>
        </div>
      </div>

      <IconButton
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
        style={{
          position: "absolute",
          top: "16px",
          left: "20px",
          color: "white",
        }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>

      <div>
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          style={{
            position: "absolute",
            top: "16px",
            left: "20px",
            color: "white",
          }}
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </div>
    </>
  );
}
