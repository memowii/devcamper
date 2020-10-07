import { useEffect } from "react";

export const usePageWithFixedTop = () => {
  useEffect(() => {
    const navbar = document.querySelector("nav.navbar");
    navbar.classList.add("fixed-top");

    return () => {
      navbar.classList.remove("fixed-top");
    };
  });
};
