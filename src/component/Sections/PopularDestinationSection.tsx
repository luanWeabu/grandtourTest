import * as React from "react";
import variableStyle from "../../styles/variables.module.scss";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import BaseTitle from "../base/BaseTitle";
export interface IPopularDestinationProps {}

const images = [
  {
    url: "/Tokyo.jpg",
    title: "Tokyo",
  },
  {
    url: "/Seoul.jpg",
    title: "Seoul",
  },
  {
    url: "/Paris.jpg",
    title: "Paris",
  },
  {
    url: "/London.jpg",
    title: "London",
  },
];

export default function PopularDestination(props: IPopularDestinationProps) {
  return (
    <div>
      <BaseTitle
        heading="Popular Destinations"
        title="World's besst touris destinations"
      />
      <Grid container justifyContent={"center"}>
        <ImageList cols={4} className={variableStyle.list_image}>
          {images.map((item) => (
            <Grid item sx={{ paddingBottom: "22px" }} key={item.url}>
              <ImageListItem
                sx={{ fontSize: "30px" }}
                className={variableStyle.image_item_popular_destinations}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: "8px", height: "300px" }}
                  className={variableStyle.image_style}
                />
                <ImageListItemBar
                  title={item.title}
                  sx={{
                    fontWeight: 900,
                    background: "none",
                    marginLeft: "20px",
                  }}
                />
              </ImageListItem>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
