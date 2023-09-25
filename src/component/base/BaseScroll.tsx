"use client";
import React, { ChangeEvent } from "react";
import { Zoom, useScrollTrigger, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";

export interface IBaseScrollProps {}

export default function BaseScroll(props: IBaseScrollProps) {
  const trigger = useScrollTrigger({
    threshold: 50,
  });

  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: "99",
        }}
      >
        <Fab
          color="secondary"
          size="large"
          aria-label="scroll back to top"
          sx={{ backgroundColor: "#1ec6b6" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}
BaseScroll.prototype = {
  children: PropTypes.element.isRequired,
};
