"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Slide,
  ListItem,
  ListItemButton,
  Drawer,
  ImageListItem,
  ImageList,
  Rating,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import variableStyle from "../../styles/variables.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import { List } from "@mui/joy";
import { navbarListData } from "@/json/navbarItemList";
import NavbarNavigationDesktop from "../setup/NavbarNavigationDeskop";
import CancelIcon from "@mui/icons-material/Cancel";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface INavBarProps {
  id?: string;
}

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
type Anchor = "right";

const imageData = [
  {
    img: "/mountain_white.jpeg",
    title: "Swiss Alps Trip",
    rating: 4,
    money: "$3,900",
  },
  {
    img: "/waterfall.jpeg",
    title: "Swiss Alps Trip",
    rating: 4,
    money: "$4,200",
  },
];

export default function NavBar(props: INavBarProps) {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "350px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <CancelIcon
            sx={{
              color: "red",
              display: "flex",
              marginLeft: 30,
              width: 50,
              height: 50,
            }}
            className={variableStyle.iconX}
          />
        </ListItem>
        {[
          "Home",
          "Tour",
          "Booking",
          "Destinations",
          "Pages",
          "Blog",
          "Shortcodes",
          "Shop",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ fontSize: "15px", fontWeight: "15px" }}
            className={variableStyle.list_items_span}
          >
            <ListItemButton>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  marginLeft: "30px",
                }}
              >
                {text}
              </span>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ marginTop: 5 }}>
          <ImageList sx={{ display: "flex", flexDirection: "column" }}>
            {imageData.map((item) => (
              <ImageListItem
                sx={{
                  width: "100%",
                  marginBottom: 3,
                  paddingLeft: 3,
                }}
                key={item.img}
              >
                <img
                  src={item.img}
                  alt="image"
                  style={{
                    borderRadius: 6,
                    width: "260px",
                    position: "relative",
                  }}
                />
                <div className={variableStyle.grand_tour}>
                  <div
                    style={{
                      background: "#ff4a52",
                      fontWeight: 700,
                      top: "5px",
                      right: 0,
                    }}
                  >
                    {item.money === "$4,200" ? (
                      <>
                        <span style={{ textDecoration: "line-through" }}>
                          $4,900
                        </span>
                        <span style={{ marginLeft: "6px" }}>{item.money}</span>
                      </>
                    ) : (
                      <span style={{ marginLeft: "6px" }}>{item.money}</span>
                    )}
                  </div>
                  <div
                    style={{
                      marginLeft: "15px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "20px" }}>
                      {item.title}
                    </span>
                    <Rating
                      name="half-rating"
                      defaultValue={item.rating}
                      precision={0.5}
                      size="small"
                      sx={{ color: "#1ec6b6" }}
                    />
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </ListItem>
        <ListItem>
          <ListItem sx={{ paddingLeft: 3 }}>
            <FacebookIcon
              style={{ height: 30, width: 30 }}
              className={variableStyle.icon_color}
            />
            <TwitterIcon
              style={{ height: 30, width: 30, marginLeft: 14 }}
              className={variableStyle.icon_color}
            />
            ,
            <YouTubeIcon
              style={{ height: 30, width: 30, marginLeft: 14 }}
              className={variableStyle.icon_color}
            />
            ,
            <PinterestIcon
              style={{ height: 30, width: 30, marginLeft: 14 }}
              className={variableStyle.icon_color}
            />
            ,
            <InstagramIcon
              style={{ height: 30, width: 30, marginLeft: 14 }}
              className={variableStyle.icon_color}
            />
            ,
          </ListItem>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: navbarColor,
            boxShadow: "none",
            position: "fixed",
          }}
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
            className={variableStyle.navbar}
            id={props.id}
          >
            <a href="#">
              <img
                src="/logoGtour.png"
                alt="imgae logo Gtour"
                style={{ height: "25px", justifyItems: "center" }}
              />
            </a>
            <Box sx={{ display: "flex" }}>
              <div className={variableStyle.navbar_item_dropdown}>
                <NavbarNavigationDesktop navbarData={navbarListData} />
              </div>
              <IconButton
                onClick={toggleDrawer("right", true)}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
              <IconButton size="large" color="inherit">
                <Badge badgeContent={1} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
