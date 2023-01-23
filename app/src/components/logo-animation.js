import img_left from "../assets/l.png";
import img_right from "../assets/r.png";
import { useEffect } from "react";

const LogoAnimation = () => {
  // responsible for changing the background of the header when reaching certain point
  useEffect(() => {
    const ld = document.querySelector(".ld");
    const rd = document.querySelector(".rd");
    const target = document.querySelector("#contact-form").getClientRects();

    window.onscroll = function () {
      var top = window.scrollY;
      if (top > 1) {
        ld.classList.add("moveToL");
        rd.classList.add("moveToR");
      } else if (top < 5) {
        ld.classList.remove("moveToL");
        rd.classList.remove("moveToR");
      }

      // if (top > 1000) {
      //   ld.classList.remove("moveToL");
      //   rd.classList.remove("moveToR");
      // } else if (top < 1000) {
      //   ld.classList.add("moveToL");
      //   rd.classList.add("moveToR");
      // }
    };
  });

  return (
    <div className="lg:block w-auto relative">
      <img className="ld" src={img_left} alt="letter D" />
      <img className="rd" src={img_right} alt="letter D" />
    </div>
  );
};

export default LogoAnimation;
