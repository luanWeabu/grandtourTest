"use client";
import React from "react";
import variableStyle from "../../styles/variables.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export interface IOptionBTnProps {}

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function OptionBtn(props: IOptionBTnProps) {
  return (
    <div className={variableStyle.option_btn}>
      <BootstrapTooltip title="Choose Theme Styling" placement="left">
        <a href="#">
          <SettingsIcon
            style={{
              color: "black",
              height: "20px",
              marginTop: "12px",
              marginBottom: "6px",
              opacity: 0.7,
            }}
          />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title="Showcase" placement="left">
        <a href="#">
          <FavoriteBorderIcon
            style={{
              color: "black",
              height: "20px",
              marginBottom: "6px",
              opacity: 0.7,
            }}
          />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title="Theme documentation" placement="left">
        <a href="#">
          <ImportContactsIcon
            style={{
              color: "black",
              height: "20px",
              marginBottom: "6px",
              opacity: 0.7,
            }}
          />
        </a>
      </BootstrapTooltip>
      <BootstrapTooltip title="Purchase Theme" placement="left">
        <a href="#">
          <ShoppingCartIcon
            style={{ color: "black", height: "20px", opacity: 0.7 }}
          />
        </a>
      </BootstrapTooltip>
    </div>
  );
}
