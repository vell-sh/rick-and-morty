import { Outlet } from "react-router";
import { Footer, Header } from "widgets";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
