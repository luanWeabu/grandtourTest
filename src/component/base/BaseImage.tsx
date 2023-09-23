import Image from "next/image";
import * as React from "react";
import variableStyle from "../../styles/variables.module.scss";
export interface IBaseImageProps {
  imageSrc: string;
  imgAlt: string;
}

export default function BaseImage({ imageSrc, imgAlt }: IBaseImageProps) {
  return (
    <Image
      src={imageSrc}
      alt={imgAlt}
      className={variableStyle.image_base_style}
    />
  );
}
