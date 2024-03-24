import Link from "next/link";


import "./UserNav.scss";
import {menuDate} from "@/mokDate/menuDate";

interface UserNavProps {
  isMobileMenuOpen?: boolean;
  closeMenu?: () => void;
}

const UserNav = ({ isMobileMenuOpen, closeMenu }: UserNavProps) => {
  return (
      <ul
          className={isMobileMenuOpen ? "user-nav__list--open" : "user-nav__list"}
      >
        {isMobileMenuOpen
            ? menuDate.map((menu) => (
                <li
                    key={menu.name}
                    className="user-nav__item--open  mobile-menu__item"
                    onClick={closeMenu}
                >
                    {menu.name}
                  {menu.rout.startsWith("tel:") && (
                      <button type="button" className="phone-btn">
                        Замовити дзвінок
                      </button>
                  )}
                </li>
            ))
            : menuDate.map((menu) => {
              return (
                  <li
                      key={menu.name}
                      className={`user-nav__item ${
                          menu.name === "Пошук" && "mobile-only"
                      } ${menu.name === "Мій список бажань" && "desktop-only"}`}
                  >
                    <Link href={menu.rout}>{menu.name}</Link>
                  </li>
              );
            })}
      </ul>
  );
};

export default UserNav;
