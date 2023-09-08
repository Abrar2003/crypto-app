import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
