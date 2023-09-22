"use client";
import React from "react";
import stylesVideo from "../../styles/YoutubeVideo.module.scss";
import variableStyle from "../../styles/variables.module.scss";

interface Props {
  srcImage: string;
}

export default function BaseVideo({ srcImage }: Props) {
  return (
    <video autoPlay muted loop className={variableStyle.BaseVideo}>
      <source src={srcImage} type="video/mp4" />
    </video>
  );
}
