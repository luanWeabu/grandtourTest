"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Grid,
  Input,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import BaseVideo from "../base/BaseVideo";
import BaseSearch from "../base/BaseInput";
import BaseAutoComple from "../base/BaseAutocomple";
import BaseButton from "../base/BaseButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import BaseInput from "../base/BaseInput";
import variableStyle from "../../styles/variables.module.scss";

const month = [
  "Any month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octorber",
  "November",
  "December",
];

const date = [
  "Sort By Date",
  "Price Low To High",
  "Price High To Low",
  "Sort By Name",
  "Sort By Popularity",
  "Sort By Review Score",
];

const categories = ["Mountain", "Rural", "Snow & Ice", "WildLife"];

const destinations = [
  "Tokyo",
  "Seoul",
  "Paris",
  "London",
  "Venice",
  "Miami",
  "Rome",
  "Prague",
  "California",
  "Kyoto",
  "Hong Kong",
  "Santorini",
];

export default function Header() {
  const [isShowing, setIsShowing] = useState<boolean | null>(false);

  const handleShowing = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div>
      <div style={{ margin: "0 auto", position: "relative" }}>
        <BaseVideo srcImage="/SpectacularNorway.mp4" />
      </div>
      <Grid
        container
        spacing={2}
        sx={{
          position: "absolute",
          justifyContent: "center",
          textAlign: "center",
          top: "35%",
          flexDirection: "column",
        }}
        className={variableStyle.textHeader}
      >
        <div>
          <Typography
            variant="h3"
            color="initial"
            sx={{
              fontFamily: "Time New Roman",
              color: "white",
            }}
          >
            Where do you want to go?
          </Typography>
          <Typography
            variant="caption"
            color="initial"
            sx={{ fontSize: "100%", color: "white" }}
          >
            Trips, experiences, and places. All in one service.
          </Typography>
        </div>
        <form action="">
          <Grid
            container
            item
            spacing={3}
            justifyContent="center"
            sx={{
              marginTop: "0.5px",
            }}
          >
            <Grid item xs={2.3} sm={8} md={2.3}>
              <BaseInput search />
            </Grid>
            <Grid item xs={2.3} sm={8} md={2.3}>
              <BaseAutoComple selected={month} calendar />
            </Grid>
            <Grid item xs={2.3} sm={8} md={2.3}>
              <BaseAutoComple selected={date} swapVert />
            </Grid>
            <Grid item xs={2.3} sm={8} md={2.3}>
              <BaseButton />
            </Grid>
          </Grid>
          {isShowing && (
            <Grid
              container
              item
              spacing={3}
              justifyContent="center"
              sx={{ marginTop: "0.5px" }}
            >
              <Grid item xs={4} sm={8} md={2.3}>
                <BaseAutoComple selected={month} calendar />
              </Grid>
              <Grid item xs={2} sm={8} md={2.3}>
                <BaseAutoComple selected={date} swapVert />
              </Grid>
              <Grid item xs={4} sm={8} md={2.3}>
                <BaseInput moneyDola />
              </Grid>
              <Grid item xs={2} sm={8} md={2.3}></Grid>
            </Grid>
          )}

          <Grid item md={4.3} xs={6}>
            <span
              style={{
                width: "100%",
                color: "white",
                fontSize: "12px",
                cursor: "pointer",
              }}
              onClick={handleShowing}
              className={variableStyle.isShowingSpan}
            >
              {isShowing ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              Advanced Search
            </span>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
