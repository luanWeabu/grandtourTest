"use client";
import * as React from "react";
import BaseTitle from "../base/BaseTitle";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import variableStyle from "../../styles/variables.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface IArticleTipsProps {}

const images = [
  {
    url: "/girlCoffe.jpg",
    date: "DECEMBER 10, 2016",
    heading: "Memorial Day to Someone Told Me to Travel",
    title:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    readmore: "Read More",
  },
  {
    url: "/red-lef.jpeg",
    date: "DECEMBER 10, 2016",
    heading: "7 Tips For Nomads On A Budget Trips",
    title:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    readmore: "Read More",
  },
  {
    url: "/chinese-roof.jpg",
    date: "DECEMBER 10, 2016",
    heading: "Taking A Travel Blog Victory Lap",
    title:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    readmore: "Read More",
  },
];

export default function ArticleTips(props: IArticleTipsProps) {
  return (
    <div>
      <BaseTitle
        heading="Articles & Tips"
        title="Explore some of the best tips from around the world"
      />
      <Grid container justifyContent={"center"}>
        <ImageList cols={3} className={variableStyle.list_image}>
          {images.map((item) => (
            <Grid key={item.url} sx={{ paddingBottom: "80px" }}>
              <ImageListItem className={variableStyle.image_item_value_trip}>
                <img src={item.url} alt="Image alt" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid ",
                    paddingTop: "27px",
                    paddingBottom: "27px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.date}
                  </a>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      paddingTop: "10px",
                      fontSize: "23px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.heading}
                  </a>

                  <p
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    {item.title}
                  </p>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      opacity: 0.6,
                    }}
                  >
                    {item.readmore}
                    <span>
                      <ArrowForwardIosIcon style={{ paddingTop: "10px" }} />
                    </span>
                  </a>
                </div>
              </ImageListItem>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
