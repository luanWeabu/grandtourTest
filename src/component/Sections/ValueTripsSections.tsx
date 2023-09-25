"use client";
import * as React from "react";
import variableStyle from "../../styles/variables.module.scss";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
} from "@mui/material";
import BaseTitle from "../base/BaseTitle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export interface IValueTripsProps {}

const images = [
  {
    url: "/FrenchAutumn.jpeg",
    money: "$5,000",
    heading: "French Antumn",
    title: "City Tours, Urban",
    cols: 2,
    time: "5 days",
    rating: 4,
    reviews: "4 reviews",
  },
  {
    url: "/Switzerland.jpeg",
    money: "$6,000",
    heading: "Grand Switzerland",
    title: "Shopping, Mountain, Snow & Ice",
    cols: 2,
    time: "6 days",
    rating: 4,
    reviews: "4 reviews",
  },
  {
    url: "/Japan.jpeg",
    money: "$2,500",
    heading: "Discover Japan",
    title: "City Tours, Iconic",
    cols: 2,
    time: "5 days",
    rating: 4,
    reviews: "4 reviews",
    sale: "sale",
  },
];

export default function ValueTrips(props: IValueTripsProps) {
  return (
    <div>
      <BaseTitle heading="Best Value Trips" title="Best offers trips from us" />
      <Grid container justifyContent={"center"}>
        <ImageList cols={3} className={variableStyle.list_image}>
          {images.map((item) => (
            <Grid
              key={item.url}
              className={`${variableStyle.image_item_value_trip}`}
            >
              <ImageListItem>
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: " 8px 8px 0 0" }}
                />
                <div
                  style={{
                    background: "#ff4a52",
                    position: "absolute",
                    bottom: "12px",
                    left: 0,
                    padding: "10px",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                  className={variableStyle.hover_div_money}
                >
                  <span style={{ color: "white" }}>
                    {item.money === "$2,500" ? (
                      <>
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginRight: 5,
                            opacity: 0.4,
                            marginLeft: 5,
                          }}
                        >
                          $5,000
                        </span>
                        {item.money}
                      </>
                    ) : (
                      <span>{item.money}</span>
                    )}
                  </span>
                </div>
                {item.sale && (
                  <div
                    style={{
                      position: "absolute",
                      right: -20,
                      top: 5,
                      background: "#1ec6b6",
                      padding: 9,
                      borderRadius: "100% ",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    <span>{item.sale}</span>
                  </div>
                )}
              </ImageListItem>
              <ImageListItemBar
                position="below"
                style={{
                  border: "1px solid #e1d3d3",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0 0 8px 8px",
                }}
                actionIcon={
                  <React.Fragment>
                    <div style={{ marginBottom: "20px" }}>
                      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                        {item.heading}
                      </h3>
                      <p style={{ fontSize: "14px" }}>{item.title}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "16px",
                      }}
                    >
                      <div>
                        <Rating
                          name="size-small"
                          defaultValue={item.rating}
                          sx={{
                            color: "#1ec6b6",
                            paddingTop: "5px",
                          }}
                          size="small"
                        />
                        {item.reviews}
                      </div>
                      <div>
                        <span
                          style={{
                            marginBottom: "15px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            opacity: 0.7,
                          }}
                        >
                          <AccessTimeIcon sx={{ paddingTop: "9px" }} />
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                }
              />
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
