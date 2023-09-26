import React, { useState } from "react";
import NavbarStyle from "../../styles/navbar.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface NavbarNavigationDesktop {
  navbarData: [];
}

export default function NavbarNavigationDesktop({
  navbarData,
}: NavbarNavigationDesktop) {
  const [showSubMenu, setShowSubMenu] = useState<any>([]);
  const subMenuOnMouseEnterHaneler = (subMenuId: number) => {
    setShowSubMenu((prev: any) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHaneler = (subMenuId: number) => {
    setShowSubMenu((prev: any) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <nav style={{ display: "flex", alignItems: "center", fontSize: "15px" }}>
      <ul className={NavbarStyle.navbar_items}>
        {navbarData.map((item: any) => {
          if (!item.children) {
            return (
              <li key={item.id}>
                <a href="#">
                  <span>{item.label}</span>
                  <KeyboardArrowDownIcon />
                </a>
              </li>
            );
          }
          return (
            <li
              onMouseEnter={() => subMenuOnMouseEnterHaneler(item.id)}
              onMouseLeave={() => subMenuOnMouseLeaveHaneler(item.id)}
              className={NavbarStyle.header_nav_options}
              key={item.id}
            >
              <div className={NavbarStyle.header_nav_div}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    marginLeft: 30,
                  }}
                >
                  {item.label}
                  <KeyboardArrowDownIcon style={{ height: 18 }} />
                </span>
              </div>
              <ul className={NavbarStyle.header_nav_ul}>
                {showSubMenu[item.id] &&
                  item.children.map((itemChildren: any) => {
                    if (!itemChildren.children) {
                      return (
                        <li
                          key={itemChildren.id}
                          className={NavbarStyle.sub_menu_li}
                        >
                          <a
                            href="#"
                            className={NavbarStyle.sub_menu_link}
                            style={{ textDecoration: "none" }}
                          >
                            <span>{itemChildren.label}</span>
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li
                        onMouseEnter={() =>
                          subMenuOnMouseEnterHaneler(itemChildren.id)
                        }
                        onMouseLeave={() =>
                          subMenuOnMouseLeaveHaneler(itemChildren.id)
                        }
                        className={NavbarStyle.sub_menu_options}
                        key={itemChildren.id}
                      >
                        <div className={NavbarStyle.sub_menu_div}>
                          <span>{itemChildren.label}</span>
                          <span className={NavbarStyle.arrow}>{">"}</span>
                        </div>
                        <ul className={NavbarStyle.sub_menu_ul}>
                          {showSubMenu[itemChildren.id] &&
                            itemChildren.children.map(
                              (itemChildrenOfChildren: any) => {
                                return (
                                  <li
                                    className={NavbarStyle.grand_child_link}
                                    key={itemChildrenOfChildren.id}
                                  >
                                    <a href="#">
                                      <span>
                                        {itemChildrenOfChildren.label}
                                      </span>
                                    </a>
                                  </li>
                                );
                              }
                            )}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
