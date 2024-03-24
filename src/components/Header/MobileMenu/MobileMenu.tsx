import { useRef, useState } from "react";
import "./MobileMenu.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import NavBar from "../../Header/NavBar/NavBar";



const MenuAnimationVariants = {
  open: {
    clipPath: `circle(150% at 0 0)`,
    duration: 0.5,
    ease: "power2.inOut",
  },
  closed: {
    clipPath: "circle(0% at 0 0)",
    duration: 0.5,
    ease: "power2.inOut",
  },
};

const AnimationVariants = {
  open: {
    y: 0,
    opacity: 1,
    ease: "power4.out",
    duration: 0.6,
    stagger: 0.1,
  },
  closed: {
    y: 50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.6,
    stagger: 0.2,
  },
};

const MobileMenu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap
          .timeline()
          .set(menuRef.current, { display: "initial" })
          .to(menuRef.current, MenuAnimationVariants.open);

        const elements =
          menuRef?.current?.querySelectorAll(".mobile-menu__item") || null;
        gsap.fromTo(elements, AnimationVariants.closed, AnimationVariants.open);
      } else {
        gsap
          .timeline()
          .to(menuRef.current, MenuAnimationVariants.closed)
          .set(menuRef.current, { display: "none" });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div ref={menuRef} className={`mobile-menu__container mob-menu`}>
      <div>
        <ul className="extra-menu__list">

        </ul>
        <NavBar isMobileMenuOpen={true} />
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingLeft: "16px" }}
      >
      </div>
    </div>
  );
};

export default MobileMenu;
