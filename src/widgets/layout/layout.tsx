import { Outlet } from "react-router";
import { Footer, Header } from "widgets";

import "./layout.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
