import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <title>ABC CRAFTS</title>
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
