import * as React from "react";
import variablesStyle from "../../styles/variables.module.scss";
export interface IBaseButtonProps {}

export default function BaseButton(props: IBaseButtonProps) {
  return (
    <div>
      <button className={variablesStyle.buttonStyle}>Search</button>
    </div>
  );
}
