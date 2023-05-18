import React from "react";
import Link from "next/link";
import styles from "../styles/designs.module.css";

import { urlFor } from "../lib/client";

import { ContactInfo } from ".";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">

      <div className="banner-desc">
      <div>
          <div>
          <ContactInfo />
          </div>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <div>
          <p>{desc}</p>
          </div>
        </div>

        {/* <img src={urlFor(image)} className="footer-banner-image" /> */}
      </div>
    </div>
  );
};

export default FooterBanner;
