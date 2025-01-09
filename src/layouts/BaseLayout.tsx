import React from 'react';
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import "./base.css"

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export const Head = () => {
  // return (
  // )
}

export default Layout;
