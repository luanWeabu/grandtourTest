"use client";
import { Input, InputAdornment } from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export interface IBaseInputProps {
  search?: boolean;
  moneyDola?: boolean;
}

export default function BaseSearch({ search, moneyDola }: IBaseInputProps) {
  return (
    <Input
      id="filled-start-adorment"
      sx={{
        width: "100%",
        color: "black",
        background: "white",
        borderRadius: "5px",
        padding: "3px",
        paddingLeft: "18px",
        ":after": {
          borderBottom: "none",
        },
      }}
      endAdornment={
        <InputAdornment position="end" sx={{ opacity: 0.5 }}>
          {search && <SearchIcon />}
          {moneyDola && <AttachMoneyIcon />}
        </InputAdornment>
      }
    />
  );
}
