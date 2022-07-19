import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
          {/* ========= footer bottom ========= */}
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} -  All right reserved.{" "}
              </p>
            </div>
    </footer>
  );
};

export default Footer;
