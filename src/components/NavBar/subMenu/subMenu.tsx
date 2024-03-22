import "./subMenu.css";
import HoverLink from "@/components/UI/HoverLink/HoverLink";
import {useRef} from "react";

const SubMenu = ({item}: any) => {
    const subNavRef = useRef<HTMLUListElement | null>(null);

    return (
        <ul className="submenu" ref={subNavRef}>
            {item.subMenu.map((subItem: any) => (
                <li key={subItem.name} className="submenu-item">
                    <HoverLink rout={subItem.rout}>
                        {subItem.name}
                    </HoverLink>
                </li>
            ))}
        </ul>
    );
};

export default SubMenu;
