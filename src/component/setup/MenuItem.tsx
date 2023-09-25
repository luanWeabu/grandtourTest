import React, { useEffect, useRef, useState } from "react";
import variableStyle from "../../styles/variables.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Dropdown from "./Dropdown";

const MenuItems = ({ item, depthLevel }: any) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  let ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return (
    <li
      className={variableStyle.menu_items}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref as any}
    >
      {item.children ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {item.label}{" "}
            {depthLevel > 0 ? (
              <span>&raquo; </span>
            ) : (
              <KeyboardArrowRightIcon
                style={{ height: "20px", marginTop: "5px" }}
              />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            dropdown={dropdown}
            submenus={item.children}
          />
        </>
      ) : (
        <a href="#">{item.label}</a>
      )}
    </li>
  );
};
export default MenuItems;
