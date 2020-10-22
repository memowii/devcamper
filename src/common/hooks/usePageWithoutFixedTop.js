import { useEffect } from "react";

export const usePageWithoutFixedTop = () => {
  useEffect(() => {
    const navbar = document.querySelector("nav.navbar");
    navbar.classList.remove("fixed-top");

    return () => {
      navbar.classList.add("fixed-top");
    };
  });
};
