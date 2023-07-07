import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h1>2023 The luce</h1>
      <div className="social-links">
        <Link
          className="link"
          href="https://twitter.com/Tolu_dev"
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link className="link" href="https://www.instagram.com/tnuell/">
          <FaInstagram />
        </Link>
        <Link className="link" href="https://www.instagram.com/tnuell/">
          <FaFacebook />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
