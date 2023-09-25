"use client";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import * as React from "react";
import variableStyle from "../../styles/variables.module.scss";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import PlaceIcon from "@mui/icons-material/Place";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface IFooterProps {}

const footerImage = [
  {
    img: "/Buddha.jpg",
    title: "buddha",
  },
  {
    img: "/penguin.jpg",
    title: "penguin",
  },
  {
    img: "/city.jpg",
    title: "city",
  },
  {
    img: "/island.jpg",
    title: "islandCity",
  },
  {
    img: "/castle.jpg",
    title: "castle",
  },
  {
    img: "/palance.jpg",
    title: "palance",
  },
];

export default function Footer(props: IFooterProps) {
  return (
    <footer style={{ background: "black", color: "white" }}>
      <div id="footer" style={{ paddingBottom: "49px" }}>
        <Grid container justifyContent={"center"}>
          <ImageList cols={3} className={variableStyle.list_image}>
            <Grid>
              <h2 style={{ paddingBottom: "20px", paddingTop: "60px" }}>
                Our Awards
              </h2>
              <p style={{ lineHeight: "30px", fontSize: "16px", width: "79%" }}>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
                <img
                  src="/awards.png"
                  alt="image"
                  width={246}
                  height={113}
                  style={{ marginTop: "35px" }}
                />
              </p>
            </Grid>
            <Grid>
              <h2 style={{ paddingBottom: "20px", paddingTop: "60px" }}>
                Contact Info
              </h2>
              <p>
                <StayCurrentPortraitIcon /> 1-567-124-44227
              </p>
              <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                <PlaceIcon /> 184 Main Street East Perl Habour 8007
              </p>
              <p style={{ paddingBottom: "35px" }}>
                <AccessAlarmIcon /> Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </p>
              <div style={{ color: "white", display: "flex" }}>
                <a
                  href="#"
                  style={{
                    color: "#2d5f9a",
                  }}
                >
                  <img
                    src="/facebook.png"
                    alt=""
                    style={{
                      borderRadius: "70px",
                      width: "45px",
                      height: "45px",
                      marginLeft: "10px",
                    }}
                  />
                </a>
                <a href="#">
                  <div
                    style={{
                      borderRadius: "70px",
                      width: "45px",
                      height: "45px",
                      background: "#00c3f3",
                      marginLeft: "15px",
                    }}
                  >
                    <TwitterIcon
                      sx={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        color: "white",
                      }}
                    />
                  </div>
                </a>
                <a href="">
                  <img
                    src="/youtube.png"
                    alt=""
                    style={{
                      borderRadius: "70px",
                      width: "45px",
                      height: "45px",

                      marginLeft: "15px",
                    }}
                  />
                </a>
                <a href="">
                  <img
                    src="/pinterest.png"
                    alt=""
                    style={{
                      borderRadius: "70px",
                      width: "45px",
                      height: "45px",
                      marginLeft: "15px",
                    }}
                  />
                </a>
                <a href="">
                  <div
                    style={{
                      borderRadius: "70px",
                      width: "45px",
                      height: "45px",
                      background: "#405de6",
                      marginLeft: "15px",
                    }}
                  >
                    <InstagramIcon
                      sx={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        color: "white",
                      }}
                    />
                  </div>
                </a>
              </div>
            </Grid>
            <Grid>
              <h2 style={{ paddingBottom: "20px", paddingTop: "60px" }}>
                Recent Trips
              </h2>
              <ImageList cols={3}>
                {footerImage.map((item) => (
                  <ImageListItem
                    key={item.img}
                    style={{ paddingLeft: 5, paddingTop: 5 }}
                  >
                    <a href="#">
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{ borderRadius: "8px" }}
                      />
                    </a>
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </ImageList>
        </Grid>
      </div>
      <div id="footer-bar" style={{ borderTop: "1px solid white" }}>
        <div
          style={{
            paddingTop: "31px",
            paddingBottom: "32px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          className={variableStyle.footer_bar}
        >
          <div>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
          <div className={variableStyle.footer_list_bar}>
            <ul className={variableStyle.footer_ul}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Tours</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Purchase Theme</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
