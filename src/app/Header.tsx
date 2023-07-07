import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>The Luce</h1>
      </Link>
      <div className="social-links">
        <Link
          className="link"
          href="https://twitter.com/Tolu_dev"
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link href="https://www.instagram.com/tnuell/">
          <FaInstagram />
        </Link>
        <Link href="https://www.instagram.com/tnuell/">
          <FaFacebook />
        </Link>
      </div>
    </header>
  );
};

export default Header;
