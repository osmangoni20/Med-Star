// import Header from "./Header/Header";

import Footer from "../common/Footer";

interface LayoutPops {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: LayoutPops) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
