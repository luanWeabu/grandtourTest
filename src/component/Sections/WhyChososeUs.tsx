"use client";
import * as React from "react";
import BaseTitle from "../base/BaseTitle";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import variableStyle from "../../styles/variables.module.scss";

export interface IWhyChooseUsProps {}

const images = [
  {
    url: "/MapMarker.png",
    heading: "Handpicked Hotels",
    title:
      "Lorem ip sum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    url: "/WorldwideLocation.png",
    heading: "Handpicked Hotels",
    title:
      "Lorem ip sum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    url: "/HotAirBalloon.png",
    heading: "Handpicked Hotels",
    title:
      "Lorem ip sum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

export default function WhyChooseUs(props: IWhyChooseUsProps) {
  return (
    <div>
      <BaseTitle
        heading="Why Choose Us"
        title="Here reasons you should plan tips with us"
      />
      <Grid container justifyContent={"center"}>
        <ImageList cols={3} className={variableStyle.list_image}>
          {images.map((item) => (
            <Grid item key={item.url} sx={{ paddingBottom: "22px" }}>
              <ImageListItem
                sx={{
                  fontSize: "30px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.url}
                  loading="lazy"
                  style={{ width: "150px", height: "150px" }}
                />
                <Typography variant="h3" color="initial">
                  {item.heading}
                </Typography>
                <Typography variant="caption" color="initial" align="center">
                  {item.title}
                </Typography>
              </ImageListItem>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
