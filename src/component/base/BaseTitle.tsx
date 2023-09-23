"use client";
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import variableStyle from "../../styles/variables.module.scss";

export interface IBaseTitleProps {
  heading?: string;
  title?: string;
}

export default function BaseTitle({ heading, title }: IBaseTitleProps) {
  return (
    <Grid container spacing={1} justifyContent={"center"}>
      <div className={variableStyle.heading_popular_destination}>
        <Typography variant="h3" color="initial">
          {heading}
        </Typography>
        <Typography
          variant="subtitle1"
          color="initial"
          sx={{ opacity: 0.5, fontSize: "15px" }}
        >
          {title}
        </Typography>
      </div>
    </Grid>
  );
}
