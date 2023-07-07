import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Posts } from "./Posts";
import Header from "./Header";
import Link from "next/link";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <div className="page-container">
        <Header />
        <Posts />
      </div>
      <Footer />
    </main>
  );
}
