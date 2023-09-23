"use client";
import { Autocomplete } from "@mui/material";
import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import varirableStyle from "../../styles/variables.module.scss";

export interface IBaseInputProps {
  selected: string[];
  numberIndexSelected?: number;
  calendar?: boolean;
  swapVert?: boolean;
  expandMore?: boolean;
  attachMoney?: boolean;
}

export default function BaseAutoComple({
  selected,
  calendar,
  swapVert,
  expandMore,
  attachMoney,
}: IBaseInputProps) {
  const [value, setValue] = useState<string | null>(selected[0]);

  return (
    <div>
      <Autocomplete
        value={value}
        sx={{
          width: "100%",
          display: "inline-block",
          "& input": {
            bgcolor: "background.paper",
            height: "40px",
            border: "none",
            borderRadius: "5px 0 0 5px",
            paddingLeft: "15px",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        id="custom-input-demo"
        options={selected}
        renderInput={(params) => (
          <div
            ref={params.InputProps.ref}
            className={varirableStyle.autocomplete}
          >
            <input
              type="text"
              {...params.inputProps}
              style={{ width: "100%" }}
            />
            <span className={varirableStyle.autocompleteSpan}>
              {calendar && (
                <CalendarTodayIcon
                  style={{
                    marginTop: "7px",
                    marginRight: "4px",
                    opacity: 0.5,
                    width: "100%",
                  }}
                />
              )}
              {swapVert && (
                <SwapVertIcon
                  style={{
                    marginTop: "7px",
                    marginRight: "4px",
                    opacity: 0.5,
                    width: "100%",
                  }}
                />
              )}
              {expandMore && (
                <ExpandMoreIcon
                  style={{
                    marginTop: "7px",
                    marginRight: "4px",
                    opacity: 0.5,
                    width: "100%",
                  }}
                />
              )}
              {attachMoney && (
                <AttachMoneyIcon
                  style={{
                    marginTop: "7px",
                    marginRight: "4px",
                    opacity: 0.5,
                    width: "100%",
                  }}
                />
              )}
            </span>
          </div>
        )}
      />
    </div>
  );
}
