import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
