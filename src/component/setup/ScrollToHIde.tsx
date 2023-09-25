import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";

export interface IScrollToHideProps {
  threshold: number;
  window?: any;
  children?: any;
}

export default function ScrollToHide(props: any) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window : undefined,
  });
  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}
